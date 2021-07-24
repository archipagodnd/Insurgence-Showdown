"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
/**
 * Converts modlogs between text and SQLite; also modernizes old-format modlogs
 * @author Annika
 * @author jetou
 */

if (!global.Config) {
	let hasSQLite = true;
	try {
		require.resolve('better-sqlite3');
	} catch (e) {
		console.warn(`Warning: the modlog conversion script is running without a SQLite library.`);
		hasSQLite = false;
	}
	global.Config = {
		nofswriting: false,
		usesqlitemodlog: hasSQLite,
		usesqlite: hasSQLite,
	};
}



var _lib = require('../../.lib-dist');
var _iptools = require('../../.server-dist/ip-tools');

const Database = Config.usesqlite ? require('better-sqlite3') : null;
const {Modlog} = require('../../.server-dist/modlog');



/** The number of modlog entries to write to the database on each transaction */
const ENTRIES_TO_BUFFER = 100000;
const ALTS_REGEX = /\(.*?'s (lock|mut|bann|blacklist)ed alts: (.*)\)/;
const AUTOCONFIRMED_REGEX = /\(.*?'s ac account: (.*)\)/;

const IP_ONLY_ACTIONS = new Set([
	'SHAREDIP', 'UNSHAREDIP', 'UNLOCKIP', 'UNLOCKRANGE', 'RANGEBAN', 'RANGELOCK',
]);

 function parseBrackets(line, openingBracket, greedy) {
	const brackets = {
		'(': ')',
		'[': ']',
	};
	const bracketOpenIndex = line.indexOf(openingBracket);
	const bracketCloseIndex = greedy ? line.lastIndexOf(brackets[openingBracket]) : line.indexOf(brackets[openingBracket]);
	if (bracketCloseIndex < 0 || bracketOpenIndex < 0) return '';
	return line.slice(bracketOpenIndex + 1, bracketCloseIndex);
} exports.parseBrackets = parseBrackets;

function toID(text) {
	return (text && typeof text === "string" ? text : "").toLowerCase().replace(/[^a-z0-9]+/g, "") ;
}

 function modernizeLog(line, nextLine) {
	// first we save and remove the timestamp and the roomname
	const prefix = _optionalChain([line, 'access', _ => _.match, 'call', _2 => _2(/\[.+?\] \(.+?\) /i), 'optionalAccess', _3 => _3[0]]);
	if (!prefix) return;
	if (ALTS_REGEX.test(line) || AUTOCONFIRMED_REGEX.test(line)) return;
	line = line.replace(prefix, '');
	// handle duplicate room bug
	if (line.startsWith('(')) line = line.replace(/\([a-z0-9-]*\) /, '');

	if (line.startsWith('(') && line.endsWith(')')) {
		line = line.slice(1, -1);
	}
	const getAlts = () => {
		let alts = '';
		_optionalChain([nextLine, 'optionalAccess', _4 => _4.replace, 'call', _5 => _5(ALTS_REGEX, (_a, _b, rawAlts) => {
			if (rawAlts) alts = `alts: [${rawAlts.split(',').map(toID).join('], [')}] `;
			return '';
		})]);
		return alts;
	};

	const getAutoconfirmed = () => {
		let autoconfirmed = '';
		_optionalChain([nextLine, 'optionalAccess', _6 => _6.replace, 'call', _7 => _7(AUTOCONFIRMED_REGEX, (_a, rawAutoconfirmed) => {
			if (rawAutoconfirmed) autoconfirmed = `ac: [${toID(rawAutoconfirmed)}] `;
			return '';
		})]);
		return autoconfirmed;
	};

	// Special cases

	if (line.startsWith('SCAV ')) {
		line = line.replace(/: (\[room: .*?\]) by (.*)/, (match, roominfo, rest) => `: by ${rest} ${roominfo}`);
	}
	line = line.replace(
		/(GIVEAWAY WIN|GTS FINISHED): ([A-Za-z0-9].*?)(won|has finished)/,
		(match, action, user) => `${action}: [${toID(user)}]:`
	);

	if (line.includes(':')) {
		const possibleModernAction = line.slice(0, line.indexOf(':')).trim();
		if (possibleModernAction === possibleModernAction.toUpperCase()) {
			if (possibleModernAction.includes('[')) {
				// for corrupted lines
				const [drop, ...keep] = line.split('[');
				process.stderr.write(`Ignoring malformed line: ${drop}\n`);
				return modernizeLog(keep.join(''));
			}
			if (/\(.+\) by [a-z0-9]{1,19}$/.test(line) && !['OLD MODLOG', 'NOTE'].includes(possibleModernAction)) {
				// weird reason formatting
				const reason = parseBrackets(line, '(', true);
				return `${prefix}${line.replace(` (${reason})`, '')}: ${reason}`;
			}
			// Log is already modernized
			return `${prefix}${line}`;
		}
	}

	if (/\[(the|a)poll\] was (started|ended) by/.test(line)) {
		const actionTaker = toID(line.slice(line.indexOf(' by ') + ' by '.length));
		const isEnding = line.includes('was ended by');
		return `${prefix}POLL${isEnding ? ' END' : ''}: by ${actionTaker}`;
	}
	if (/User (.*?) won the game of (.*?) mode trivia/.test(line)) {
		return `${prefix}TRIVIAGAME: by unknown: ${line}`;
	}

	const modernizerTransformations = {
		'notes: ': (log) => {
			const [actionTaker, ...rest] = line.split(' notes: ');
			return `NOTE: by ${toID(actionTaker)}: ${rest.join('')}`;
		},

		' declared': (log) => {
			let newAction = 'DECLARE';
			let oldAction = ' declared';
			if (log.includes(' globally declared')) {
				oldAction = ' globally declared';
				newAction = 'GLOBALDECLARE';
			}
			if (log.includes('(chat level)')) {
				oldAction += ' (chat level)';
				newAction = `CHATDECLARE`;
			}

			const actionTakerName = toID(log.slice(0, log.lastIndexOf(oldAction)));

			log = log.slice(actionTakerName.length);
			log = log.slice(oldAction.length);
			log = log.replace(/^\s?:/, '').trim();
			return `${newAction}: by ${actionTakerName}: ${log}`;
		},

		'changed the roomdesc to: ': (log) => {
			const actionTaker = parseBrackets(log, '[');
			log = log.slice(actionTaker.length + 3);
			log = log.slice('changed the roomdesc to: '.length + 1, -2);
			return `ROOMDESC: by ${actionTaker}: to "${log}"`;
		},

		'roomevent titled "': (log) => {
			let action;
			if (log.includes(' added a roomevent titled "')) {
				action = 'added a';
			} else if (log.includes(' removed a roomevent titled "')) {
				action = 'removed a';
			} else {
				action = 'edited the';
			}
			const actionTakerName = log.slice(0, log.lastIndexOf(` ${action} roomevent titled "`));
			log = log.slice(actionTakerName.length + 1);
			const eventName = log.slice(` ${action} roomevent titled `.length, -2);
			return `ROOMEVENT: by ${toID(actionTakerName)}: ${action.split(' ')[0]} "${eventName}"`;
		},

		'set modchat to ': (log) => {
			const actionTaker = parseBrackets(log, '[');
			log = log.slice(actionTaker.length + 3);
			log = log.slice('set modchat to '.length);
			return `MODCHAT: by ${actionTaker}: to ${log}`;
		},
		'set modjoin to ': (log) => {
			const actionTakerName = log.slice(0, log.lastIndexOf(' set'));
			log = log.slice(actionTakerName.length + 1);
			log = log.slice('set modjoin to '.length);
			const rank = log.startsWith('sync') ? 'sync' : log.replace('.', '');
			return `MODJOIN${rank === 'sync' ? ' SYNC' : ''}: by ${toID(actionTakerName)}${rank !== 'sync' ? `: ${rank}` : ``}`;
		},
		'turned off modjoin': (log) => {
			const actionTakerName = log.slice(0, log.lastIndexOf(' turned off modjoin'));
			return `MODJOIN: by ${toID(actionTakerName)}: OFF`;
		},

		'changed the roomintro': (log) => {
			const isDeletion = /deleted the (staff|room)intro/.test(log);
			const isRoomintro = log.includes('roomintro');
			const actionTaker = toID(log.slice(0, log.indexOf(isDeletion ? 'deleted' : 'changed')));
			return `${isDeletion ? 'DELETE' : ''}${isRoomintro ? 'ROOM' : 'STAFF'}INTRO: by ${actionTaker}`;
		},
		'deleted the roomintro': (log) => modernizerTransformations['changed the roomintro'](log),
		'changed the staffintro': (log) => modernizerTransformations['changed the roomintro'](log),
		'deleted the staffintro': (log) => modernizerTransformations['changed the roomintro'](log),

		'created a tournament in': (log) => {
			const actionTaker = parseBrackets(log, '[');
			log = log.slice(actionTaker.length + 3);
			log = log.slice(24, -8);
			return `TOUR CREATE: by ${actionTaker}: ${log}`;
		},
		'was disqualified from the tournament by': (log) => {
			const disqualified = parseBrackets(log, '[');
			log = log.slice(disqualified.length + 3);
			log = log.slice('was disqualified from the tournament by'.length);
			return `TOUR DQ: [${toID(disqualified)}] by ${toID(log)}`;
		},
		'The tournament auto disqualify timeout was set to': (log) => {
			const byIndex = log.indexOf(' by ');
			const actionTaker = log.slice(byIndex + ' by '.length);
			const length = log.slice('The tournament auto disqualify timeout was set to'.length, byIndex);
			return `TOUR AUTODQ: by ${toID(actionTaker)}: ${length.trim()}`;
		},

		' was blacklisted from ': (log) => {
			const isName = log.includes(' was nameblacklisted from ');
			const banned = toID(log.slice(0, log.indexOf(` was ${isName ? 'name' : ''}blacklisted from `)));
			log = log.slice(log.indexOf(' by ') + ' by '.length);
			let reason, ip;
			if (/\(.*\)/.test(log)) {
				reason = parseBrackets(log, '(');
				if (/\[.*\]/.test(log)) ip = parseBrackets(log, '[');
				log = log.slice(0, log.indexOf('('));
			}
			const actionTaker = toID(log);
			return `${isName ? 'NAME' : ''}BLACKLIST: [${banned}] ${getAutoconfirmed()}${getAlts()}${ip ? `[${ip}] ` : ``}by ${actionTaker}${reason ? `: ${reason}` : ``}`;
		},
		' was nameblacklisted from ': (log) => modernizerTransformations[' was blacklisted from '](log),
		' was banned from room ': (log) => {
			const banned = toID(log.slice(0, log.indexOf(' was banned from room ')));
			log = log.slice(log.indexOf(' by ') + ' by '.length);
			let reason, ip;
			if (/\(.*\)/.test(log)) {
				reason = parseBrackets(log, '(');
				if (/\[.*\]/.test(log)) ip = parseBrackets(log, '[');
				log = log.slice(0, log.indexOf('('));
			}
			const actionTaker = toID(log);
			return `ROOMBAN: [${banned}] ${getAutoconfirmed()}${getAlts()}${ip ? `[${ip}] ` : ``}by ${actionTaker}${reason ? `: ${reason}` : ``}`;
		},
		' was muted by ': (log) => {
			let muted = '';
			let isHour = false;
			[muted, log] = log.split(' was muted by ');
			muted = toID(muted);
			let reason, ip;
			if (/\(.*\)/.test(log)) {
				reason = parseBrackets(log, '(');
				if (/\[.*\]/.test(log)) ip = parseBrackets(log, '[');
				log = log.slice(0, log.indexOf('('));
			}
			let actionTaker = toID(log);
			if (actionTaker.endsWith('for1hour')) {
				isHour = true;
				actionTaker = actionTaker.replace(/^(.*)(for1hour)$/, (match, staff) => staff) ;
			}
			return `${isHour ? 'HOUR' : ''}MUTE: [${muted}] ${getAutoconfirmed()}${getAlts()}${ip ? `[${ip}] ` : ``}by ${actionTaker}${reason ? `: ${reason}` : ``}`;
		},
		' was locked from talking ': (log) => {
			const isWeek = log.includes(' was locked from talking for a week ');
			const locked = toID(log.slice(0, log.indexOf(' was locked from talking ')));
			log = log.slice(log.indexOf(' by ') + ' by '.length);
			let reason, ip;
			if (/\(.*\)/.test(log)) {
				reason = parseBrackets(log, '(');
				if (/\[.*\]/.test(log)) ip = parseBrackets(log, '[');
				log = log.slice(0, log.indexOf('('));
			}
			const actionTaker = toID(log);
			return `${isWeek ? 'WEEK' : ''}LOCK: [${locked}] ${getAutoconfirmed()}${getAlts()}${ip ? `[${ip}] ` : ``}by ${actionTaker}${reason ? `: ${reason}` : ``}`;
		},
		' was banned ': (log) => {
			if (log.includes(' was banned from room ')) return modernizerTransformations[' was banned from room '](log);
			const banned = toID(log.slice(0, log.indexOf(' was banned ')));
			log = log.slice(log.indexOf(' by ') + ' by '.length);
			let reason, ip;
			if (/\(.*\)/.test(log)) {
				reason = parseBrackets(log, '(');
				if (/\[.*\]/.test(log)) ip = parseBrackets(log, '[');
				log = log.slice(0, log.indexOf('('));
			}
			const actionTaker = toID(log);
			return `BAN: [${banned}] ${getAutoconfirmed()}${getAlts()}${ip ? `[${ip}] ` : ``}by ${actionTaker}${reason ? `: ${reason}` : ``}`;
		},

		'was promoted to ': (log) => {
			const isDemotion = log.includes('was demoted to ');
			const userid = toID(log.split(' was ')[0]);
			if (!userid) {
				throw new Error(`Ignoring malformed line: ${prefix}${log}`);
			}
			log = log.slice(userid.length + 3);
			log = log.slice(`was ${isDemotion ? 'demoted' : 'promoted'} to `.length);
			let rank = log.slice(0, log.indexOf(' by')).replace(/ /, '').toUpperCase();

			log = log.slice(`${rank} by `.length);
			if (!rank.startsWith('ROOM')) rank = `GLOBAL ${rank}`;
			const actionTaker = parseBrackets(log, '[');
			return `${rank}: [${userid}] by ${actionTaker}${isDemotion ? ': (demote)' : ''}`;
		},
		'was demoted to ': (log) => modernizerTransformations['was promoted to '](log),
		'was appointed Room Owner by ': (log) => {
			const userid = parseBrackets(log, '[');
			log = log.slice(userid.length + 3);
			log = log.slice('was appointed Room Owner by '.length);
			const actionTaker = parseBrackets(log, '[');
			return `ROOMOWNER: [${userid}] by ${actionTaker}`;
		},

		' claimed this ticket': (log) => {
			const actions = {
				' claimed this ticket': 'TICKETCLAIM',
				' closed this ticket': 'TICKETCLOSE',
				' deleted this ticket': 'TICKETDELETE',
			};
			for (const oldAction in actions) {
				if (log.includes(oldAction)) {
					const actionTaker = toID(log.slice(0, log.indexOf(oldAction)));
					return `${actions[oldAction]}: by ${actionTaker}`;
				}
			}
			return log;
		},
		'This ticket is now claimed by ': (log) => {
			const claimer = toID(log.slice(log.indexOf(' by ') + ' by '.length));
			return `TICKETCLAIM: by ${claimer}`;
		},
		' is no longer interested in this ticket': (log) => {
			const abandoner = toID(log.slice(0, log.indexOf(' is no longer interested in this ticket')));
			return `TICKETABANDON: by ${abandoner}`;
		},
		' opened a new ticket': (log) => {
			const opener = toID(log.slice(0, log.indexOf(' opened a new ticket')));
			const problem = log.slice(log.indexOf(' Issue: ') + ' Issue: '.length).trim();
			return `TICKETOPEN: by ${opener}: ${problem}`;
		},
		' closed this ticket': (log) => modernizerTransformations[' claimed this ticket'](log),
		' deleted this ticket': (log) => modernizerTransformations[' claimed this ticket'](log),
		'This ticket is no longer claimed': () => 'TICKETUNCLAIM',

		' has been caught attempting a hunt with ': (log) => {
			const index = log.indexOf(' has been caught attempting a hunt with ');
			const user = toID(log.slice(0, index));
			log = log.slice(index + ' has been caught attempting a hunt with '.length);
			log = log.replace('. The user has also', '; has also').replace('.', '');
			return `SCAV CHEATER: [${user}]: caught attempting a hunt with ${log}`;
		},

		'made this room hidden': (log) => {
			const user = toID(log.slice(0, log.indexOf(' made this room hidden')));
			return `HIDDENROOM: by ${user}`;
		},

		'The tournament auto start timer was set to ': (log) => {
			log = log.slice('The tournament auto start timer was set to'.length);
			const [length, setter] = log.split(' by ').map(toID);
			return `TOUR AUTOSTART: by ${setter}: ${length}`;
		},
		'The tournament auto disqualify timer was set to ': (log) => {
			log = log.slice('The tournament auto disqualify timer was set to'.length);
			const [length, setter] = log.split(' by ').map(toID);
			return `TOUR AUTODQ: by ${setter}: ${length}`;
		},
		" set the tournament's banlist to ": (log) => {
			const [setter, banlist] = log.split(` set the tournament's banlist to `);
			return `TOUR BANLIST: by ${toID(setter)}: ${banlist.slice(0, -1)}`; // remove trailing . from banlist
		},
		" set the tournament's custom rules to": (log) => {
			const [setter, rules] = log.split(` set the tournament's custom rules to `);
			return `TOUR RULES: by ${toID(setter)}: ${rules.slice(0, -1)}`;
		},
		'[agameofhangman] was started by ': (log) => `HANGMAN: by ${toID(log.slice('[agameofhangman] was started by '.length))}`,
		'[agameofunowas] created by ': (log) => `UNO CREATE: by ${toID(log.slice('[agameofunowas] created by '.length))}`,
		'[thetournament] was set to autostart': (log) => {
			const [, user] = log.split(' by ');
			return `TOUR AUTOSTART: by ${toID(user)}: when playercap is reached`;
		},
		'[thetournament] was set to allow scouting': (log) => {
			const [, user] = log.split(' by ');
			return `TOUR SCOUT: by ${toID(user)}: allow`;
		},
		'[thetournament] was set to disallow scouting': (log) => {
			const [, user] = log.split(' by ');
			return `TOUR SCOUT: by ${toID(user)}: disallow`;
		},
	};

	for (const oldAction in modernizerTransformations) {
		if (line.includes(oldAction)) {
			try {
				return prefix + modernizerTransformations[oldAction](line);
			} catch (err) {
				if (Config.nofswriting) throw err;
				process.stderr.write(`${err.message}\n`);
			}
		}
	}

	return `${prefix}${line}`;
} exports.modernizeLog = modernizeLog;

 function parseModlog(raw, nextLine, isGlobal = false) {
	let line = modernizeLog(raw);
	if (!line) return;

	const timestamp = parseBrackets(line, '[');
	line = line.slice(timestamp.length + 3);
	const [roomID, ...bonus] = parseBrackets(line, '(').split(' ');

	const log = {
		action: 'NULL',
		roomID,
		visualRoomID: '',
		userid: null,
		autoconfirmedID: null,
		alts: [],
		ip: null,
		isGlobal,
		loggedBy: null,
		note: '',
		time: Math.floor(new Date(timestamp).getTime()) || 0,
	};

	if (bonus.length) log.visualRoomID = `${log.roomID} ${bonus.join(' ')}`;
	line = line.slice((log.visualRoomID || log.roomID).length + 3);
	const actionColonIndex = line.indexOf(':');
	const action = line.slice(0, actionColonIndex);
	if (action !== action.toUpperCase()) {
		// no action (probably an old-format log that slipped past the modernizer)
		log.action = 'OLD MODLOG';
		log.loggedBy = 'unknown' ;
		log.note = line.trim();
		return log;
	} else {
		log.action = action;
		if (log.action === 'OLD MODLOG') {
			log.loggedBy = 'unknown' ;
			log.note = line.slice(line.indexOf('by unknown: ') + 'by unknown :'.length).trim();
			return log;
		}
		line = line.slice(actionColonIndex + 2);
	}

	if (line[0] === '[') {
		if (!IP_ONLY_ACTIONS.has(log.action)) {
			const userid = toID(parseBrackets(line, '['));
			log.userid = userid;
			line = line.slice(userid.length + 3).trim();
			if (line.startsWith('ac:')) {
				line = line.slice(3).trim();
				const ac = parseBrackets(line, '[');
				log.autoconfirmedID = toID(ac);
				line = line.slice(ac.length + 3).trim();
			}
			if (line.startsWith('alts:')) {
				line = line.slice(5).trim();
				const alts = new Set(); // we need to weed out duplicate alts

				let alt = parseBrackets(line, '[');
				do {
					if (alt.includes(', ')) {
						// old alt format
						for (const trueAlt of alt.split(', ')) {
							alts.add(toID(trueAlt));
						}
						line = line.slice(line.indexOf(`[${alt}],`) + `[${alt}],`.length).trim();
						if (!line.startsWith('[')) line = `[${line}`;
					} else {
						if (_iptools.IPTools.ipRegex.test(alt)) break;
						alts.add(toID(alt));
						line = line.slice(line.indexOf(`[${alt}],`) + `[${alt}],`.length).trim();
						if (alt.includes('[') && !line.startsWith('[')) line = `[${line}`;
					}
					alt = parseBrackets(line, '[');
				} while (alt);
				log.alts = [...alts];
			}
		}
		if (line[0] === '[') {
			log.ip = parseBrackets(line, '[');
			line = line.slice(log.ip.length + 3).trim();
		}
	}

	let regex = /\bby .*:/;
	let actionTakerIndex = _optionalChain([regex, 'access', _8 => _8.exec, 'call', _9 => _9(line), 'optionalAccess', _10 => _10.index]);
	if (actionTakerIndex === undefined) {
		actionTakerIndex = line.indexOf('by ');
		regex = /\bby .*/;
	}
	if (actionTakerIndex !== -1) {
		const colonIndex = line.indexOf(': ');
		const actionTaker = line.slice(actionTakerIndex + 3, colonIndex > actionTakerIndex ? colonIndex : undefined);
		if (toID(actionTaker).length < 19) {
			log.loggedBy = toID(actionTaker) || null;
			if (colonIndex > actionTakerIndex) line = line.slice(colonIndex);
			line = line.replace(regex, ' ');
		}
	}
	if (line) log.note = line.replace(/^\s?:\s?/, '').trim();
	return log;
} exports.parseModlog = parseModlog;

 function rawifyLog(log) {
	let result = `[${new Date(log.time || Date.now()).toJSON()}] (${(log.visualRoomID || log.roomID || 'global').replace(/^global-/, '')}) ${log.action}`;
	if (log.userid) result += `: [${log.userid}]`;
	if (log.autoconfirmedID) result += ` ac: [${log.autoconfirmedID}]`;
	if (log.alts.length) result += ` alts: [${log.alts.join('], [')}]`;
	if (log.ip) {
		if (!log.userid) result += `:`;
		result += ` [${log.ip}]`;
	}
	if (log.loggedBy) result += `${result.endsWith(']') ? '' : ':'} by ${log.loggedBy}`;
	if (log.note) result += `: ${log.note}`;
	return result + `\n`;
} exports.rawifyLog = rawifyLog;

 class ModlogConverterSQLite {
	
	
	 __init() {this.isTesting = null}

	constructor(databaseFile, textLogDir, isTesting) {;ModlogConverterSQLite.prototype.__init.call(this);
		this.databaseFile = databaseFile;
		this.textLogDir = textLogDir;
		if (isTesting || Config.nofswriting) {
			this.isTesting = {files: new Map(), db: isTesting || new Database(':memory:')};
		}
	}

	async toTxt() {
		const database = _optionalChain([this, 'access', _11 => _11.isTesting, 'optionalAccess', _12 => _12.db]) || new Database(this.databaseFile, {fileMustExist: true});
		const roomids = database.prepare('SELECT DISTINCT roomid FROM modlog').all();
		const globalEntries = [];
		for (const {roomid} of roomids) {
			if (!Config.nofswriting) console.log(`Reading ${roomid}...`);
			const results = database.prepare(
				`SELECT *, (SELECT group_concat(userid, ',') FROM alts WHERE alts.modlog_id = modlog.modlog_id) as alts ` +
				`FROM modlog WHERE roomid = ? ORDER BY timestamp ASC`
			).all(roomid);

			const trueRoomID = roomid.replace(/^global-/, '');

			let entriesLogged = 0;
			let entries = [];

			const insertEntries = async () => {
				if (roomid === 'global') return;
				entriesLogged += entries.length;
				if (!Config.nofswriting && (entriesLogged % ENTRIES_TO_BUFFER === 0 || entriesLogged < ENTRIES_TO_BUFFER)) {
					process.stdout.clearLine(0);
					process.stdout.cursorTo(0);
					process.stdout.write(`Wrote ${entriesLogged} entries from '${trueRoomID}'`);
				}
				await this.writeFile(`${this.textLogDir}/modlog_${trueRoomID}.txt`, entries.join(''));
				entries = [];
			};

			for (const result of results) {
				const entry = {
					action: result.action,
					roomID: _optionalChain([result, 'access', _13 => _13.roomid, 'optionalAccess', _14 => _14.replace, 'call', _15 => _15(/^global-/, '')]),
					visualRoomID: result.visual_roomid,
					userid: result.userid,
					autoconfirmedID: result.autoconfirmed_userid,
					alts: _optionalChain([result, 'access', _16 => _16.alts, 'optionalAccess', _17 => _17.split, 'call', _18 => _18(',')]),
					ip: result.ip,
					isGlobal: _optionalChain([result, 'access', _19 => _19.roomid, 'optionalAccess', _20 => _20.startsWith, 'call', _21 => _21('global-')]) || result.roomid === 'global',
					loggedBy: result.action_taker_userid,
					note: result.note,
					time: result.timestamp,
				};

				const rawLog = rawifyLog(entry);
				entries.push(rawLog);
				if (entry.isGlobal) {
					globalEntries.push(rawLog);
				}
				if (entries.length === ENTRIES_TO_BUFFER) await insertEntries();
			}
			await insertEntries();
			if (entriesLogged) process.stdout.write('\n');
		}
		if (!Config.nofswriting) console.log(`Writing the global modlog...`);
		await this.writeFile(`${this.textLogDir}/modlog_global.txt`, globalEntries.join(''));
	}

	async writeFile(path, text) {
		if (this.isTesting) {
			const old = this.isTesting.files.get(path);
			return this.isTesting.files.set(path, `${old || ''}${text}`);
		}
		return _lib.FS.call(void 0, path).append(text);
	}
} exports.ModlogConverterSQLite = ModlogConverterSQLite;

 class ModlogConverterTxt {
	
	

	
	 __init2() {this.isTesting = null}
	constructor(databaseFile, textLogDir, isTesting, useFTSExtension) {;ModlogConverterTxt.prototype.__init2.call(this);
		this.databaseFile = databaseFile;
		this.textLogDir = textLogDir;
		if (isTesting || Config.nofswriting) {
			this.isTesting = {
				files: isTesting || new Map(),
			};
		}

		this.modlog = new Modlog(this.textLogDir, this.isTesting ? ':memory:' : this.databaseFile);
	}

	async toSQLite() {
		const files = this.isTesting ? [...this.isTesting.files.keys()] : await _lib.FS.call(void 0, this.textLogDir).readdir();
		// Read global modlog first to avoid inserting duplicate data to database
		if (files.includes('modlog_global.txt')) {
			files.splice(files.indexOf('modlog_global.txt'), 1);
			files.unshift('modlog_global.txt');
		}

		// we don't want to insert global modlog entries twice, so we keep track of global ones
		// and don't reinsert them
		/** roomid:list of modlog entry strings */
		const globalEntries = {};

		for (const file of files) {
			if (file === 'README.md') continue;
			const roomid = file.slice(7, -4);
			const lines = this.isTesting ?
				_optionalChain([this, 'access', _22 => _22.isTesting, 'access', _23 => _23.files, 'access', _24 => _24.get, 'call', _25 => _25(file), 'optionalAccess', _26 => _26.split, 'call', _27 => _27('\n')]) || [] :
				_lib.FS.call(void 0, `${this.textLogDir}/${file}`).createReadStream().byLine();

			let entriesLogged = 0;
			let lastLine = undefined;
			let entries = [];

			const insertEntries = (alwaysShowProgress) => {
				this.modlog.writeSQL(entries);
				entriesLogged += entries.length;
				if (!Config.nofswriting && (
					alwaysShowProgress ||
					entriesLogged % ENTRIES_TO_BUFFER === 0 ||
					entriesLogged < ENTRIES_TO_BUFFER
				)) {
					process.stdout.clearLine(0);
					process.stdout.cursorTo(0);
					process.stdout.write(`Inserted ${entriesLogged} entries from '${roomid}'`);
				}
				entries = [];
			};

			for await (const line of lines) {
				const entry = parseModlog(line, lastLine, roomid === 'global');
				lastLine = line;
				if (!entry) continue;
				if (roomid !== 'global' && _optionalChain([globalEntries, 'access', _28 => _28[entry.roomID], 'optionalAccess', _29 => _29.includes, 'call', _30 => _30(line)])) {
					// this is a global modlog entry that has already been inserted
					continue;
				}
				if (entry.isGlobal) {
					if (!globalEntries[entry.roomID]) globalEntries[entry.roomID] = [];
					globalEntries[entry.roomID].push(line);
					if (entry.roomID !== 'global' && !entry.roomID.startsWith('global-')) entry.roomID = `global-${entry.roomID}`;
				}
				entries.push(entry);
				if (entries.length === ENTRIES_TO_BUFFER) insertEntries();
			}
			insertEntries(true);
			if (entriesLogged) process.stdout.write('\n');
		}
		return this.modlog.database;
	}
} exports.ModlogConverterTxt = ModlogConverterTxt;

 class ModlogConverterTest {
	
	

	constructor(inputDir, outputDir) {
		this.inputDir = inputDir;
		this.outputDir = outputDir;
	}

	async toTxt() {
		const files = await _lib.FS.call(void 0, this.inputDir).readdir();
		// Read global modlog last to avoid inserting duplicate data to database
		if (files.includes('modlog_global.txt')) {
			files.splice(files.indexOf('modlog_global.txt'), 1);
			files.push('modlog_global.txt');
		}

		const globalEntries = [];

		for (const file of files) {
			if (file === 'README.md') continue;
			const roomid = file.slice(7, -4);

			let entriesLogged = 0;
			let lastLine = undefined;
			let entries = [];

			const insertEntries = async () => {
				if (roomid === 'global') return;
				entriesLogged += entries.length;
				if (!Config.nofswriting && (entriesLogged % ENTRIES_TO_BUFFER === 0 || entriesLogged < ENTRIES_TO_BUFFER)) {
					process.stdout.clearLine(0);
					process.stdout.cursorTo(0);
					process.stdout.write(`Wrote ${entriesLogged} entries from '${roomid}'`);
				}
				await _lib.FS.call(void 0, `${this.outputDir}/modlog_${roomid}.txt`).append(entries.join(''));
				entries = [];
			};

			const readStream = _lib.FS.call(void 0, `${this.inputDir}/${file}`).createReadStream();
			for await (const line of readStream.byLine()) {
				const entry = parseModlog(line, lastLine, roomid === 'global');
				lastLine = line;
				if (!entry) continue;
				const rawLog = rawifyLog(entry);
				if (roomid !== 'global') entries.push(rawLog);
				if (entry.isGlobal) {
					globalEntries.push(rawLog);
				}
				if (entries.length === ENTRIES_TO_BUFFER) await insertEntries();
			}
			await insertEntries();
			if (entriesLogged) process.stdout.write('\n');
		}

		if (!Config.nofswriting) console.log(`Writing the global modlog...`);
		await _lib.FS.call(void 0, `${this.outputDir}/modlog_global.txt`).append(globalEntries.join(''));
	}
} exports.ModlogConverterTest = ModlogConverterTest;

 const ModlogConverter = {
	async convert(
		from, to, databasePath,
		textLogDirectoryPath, outputLogPath
	) {
		if (from === 'txt' && to === 'txt' && outputLogPath) {
			const converter = new ModlogConverterTest(textLogDirectoryPath, outputLogPath);
			await converter.toTxt();
			console.log("\nDone!");
			process.exit();
		} else if (from === 'sqlite' && to === 'txt') {
			const converter = new ModlogConverterSQLite(databasePath, textLogDirectoryPath);
			await converter.toTxt();
			console.log("\nDone!");
			process.exit();
		} else if (from === 'txt' && to === 'sqlite') {
			const converter = new ModlogConverterTxt(databasePath, textLogDirectoryPath);
			await converter.toSQLite();
			console.log("\nDone!");
			process.exit();
		}
	},
}; exports.ModlogConverter = ModlogConverter;

 //# sourceMappingURL=sourceMaps/converter.js.map