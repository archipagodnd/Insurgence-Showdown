"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/**
 * Async worker thread wrapper around SQLite, written to improve concurrent performance.
 * @author mia-pi-git
 */
var _processmanager = require('./process-manager');
var _child_process = require('child_process'); var child_process = _child_process;
var _path = require('path'); var path = _path;
var _fs = require('./fs');




































function getModule() {
	try {
		return require('better-sqlite3') ;
	} catch (e) {
		return null;
	}
}

 class DatabaseWrapper  {
	
	
	
	
	constructor(options) {
		this.statements = new Map();
		this.pendingRequests = [];
		this.process = child_process.fork(__filename, [], {
			env: options , cwd: path.resolve(__dirname, '..'), execArgv: ['-r', 'ts-node/register'],
		});
		this.listen();
	}
	getProcess() {
		return this.process;
	}
	listen() {
		this.process.on("message", (message) => {
			const handlers = this.pendingRequests.shift();
			if (typeof message === 'string') {
				if (message.startsWith('THROW\n')) {
					const error = new Error();
					error.stack = message.slice(6);
					if (_optionalChain([handlers, 'optionalAccess', _ => _[1]])) return handlers[1](error);
					throw error;
				}
				if (message.startsWith('STATEMENTS\n')) {
					this.statements = new Map(Object.entries(JSON.parse(message.slice(12))));
					return;
				}
			}
			if (handlers) {
				if (!this.pendingRequests.length && this.pendingRelease) this.pendingRelease();
				return handlers[0](message);
			}
			throw new Error(`Database wrapper received a message, but there was no pending request.`);
		});
	}
	async release() {
		await new Promise(resolve => {
			this.pendingRelease = resolve;
		});
		this.process.disconnect();
		this.statements.clear();
	}
	getLoad() {
		return this.pendingRequests.length;
	}
	destroy() {
		void this.release();
	}
	runFile(filename) {
		const file = _fs.FS.call(void 0, filename);
		if (!file.existsSync()) throw new Error(`File passed to runFile does not exist.`);
		if (!filename.endsWith('.sql')) throw new Error(`File passed to runFile is not a .sql file.`);
		const content = file.readSync();
		const db = this.getDatabase();
		if (db) return db.exec(content);
		return this.exec(content);
	}
	getDatabase() {
		return database;
	}
	async prepare(statement) {
		const cachedStatement = this.statements.get(statement);
		if (cachedStatement) {
			return cachedStatement;
		}
		const int = await this.query({type: 'prepare', data: statement});
		if (typeof int === 'number') this.statements.set(statement, int);
		return int;
	}
	all(statement, data = {}) {
		const num = typeof statement === 'number' ? statement : this.statements.get(statement);
		if (num === undefined || ![...this.statements.values()].includes(num)) {
			throw new Error(`Prepare a statement before using another database function with SQLDatabase.prepare.`);
		}
		return this.query({type: 'all', num: num, data});
	}
	get(statement, data = {}) {
		const num = typeof statement === 'number' ? statement : this.statements.get(statement);
		if (num === undefined || ![...this.statements.values()].includes(num)) {
			throw new Error(`Prepare a statement before using another database function with SQLDatabase.prepare.`);
		}
		return this.query({type: 'get', data, num});
	}
	run(statement, data) {
		const num = typeof statement === 'number' ? statement : this.statements.get(statement);
		if (num === undefined || ![...this.statements.values()].includes(num)) {
			throw new Error(`Prepare a statement before using another database function with SQLDatabase.prepare.`);
		}
		return this.query({type: 'run', num, data});
	}
	/** We don't want these to be prepared statements, since this should be used SPARINGLY. */
	exec(statement) {
		return this.query({type: 'exec', data: statement});
	}
	query(args) {
		this.process.send(args);
		return new Promise((resolve, reject) => {
			this.pendingRequests.push([resolve, reject]);
		});
	}
	transaction(name, data) {
		return this.query({type: 'transaction', name, data});
	}
} exports.DatabaseWrapper = DatabaseWrapper;

class SQLProcessManager extends _processmanager.ProcessManager {
	constructor(module) {
		super(module);
	}
	createProcess(options) {
		const process = new DatabaseWrapper(options);
		this.processes.push(process);
		return process;
	}
	listen() {}
	destroyProcess(process) {
		void process.release();
		this.processes.splice(this.processes.indexOf(process), 1);
	}
}

 const PM = new SQLProcessManager(module); exports.PM = PM;
const Database = getModule();

function crashlog(err, query) {
	process.send(`THROW\n@!!@${JSON.stringify([err.name, err.message, 'a SQL process', query])}\n${err.stack}`);
}

let database;
if (!exports.PM.isParentProcess) {
	let statementNum = 0;
	const statements = new Map();
	const transactions = new Map();
	let statementTable = {};

	const getStatementTable = () => {
		if (Object.keys(statementTable).length !== statements.size) {
			statementTable = {};
			for (const statement of statements.values()) {
				statementTable[statement.source] = statement;
			}
		}
		return statementTable;
	};

	const {file, extension} = process.env;
	database = Database ? new Database(file) : null;
	if (extension && database) {
		const {
			functions,
			transactions: storedTransactions,
			statements: storedStatements,
			onDatabaseStart,
			// eslint-disable-next-line @typescript-eslint/no-var-requires
		} = require(`../${extension}`);
		if (functions) {
			for (const k in functions) {
				database.function(k, functions[k]);
			}
		}
		if (storedTransactions) {
			for (const t in storedTransactions) {
				const transaction = database.transaction(storedTransactions[t]);
				transactions.set(t, transaction);
			}
		}
		if (storedStatements) {
			for (const k in storedStatements) {
				const statement = database.prepare(storedStatements[k]);
				statements.set(statementNum++, statement); // we use statementNum here to track with the rest
			}
			process.send(`STATEMENTS\n${JSON.stringify(Object.fromEntries(statements))}\n`);
		}
		if (onDatabaseStart) {
			onDatabaseStart(database);
		}
	}
	_optionalChain([database, 'optionalAccess', _2 => _2.pragma, 'call', _3 => _3(`foreign_keys=on`)]);


	process.on('message', (query) => {
		let statement;
		let results;
		try {
			switch (query.type) {
			case 'prepare': {
				if (!database) return process.send(-1);
				const {data} = query;
				const newStatement = database.prepare(data);
				const nextNum = statementNum++;
				statements.set(nextNum, newStatement);
				return process.send(nextNum);
			}
			case 'all': {
				if (!database) {
					results = [];
					break;
				}
				const {num, data} = query;
				statement = statements.get(num);
				results = _optionalChain([statement, 'optionalAccess', _4 => _4.all, 'call', _5 => _5(data)]) || [];
			}
				break;
			case 'get': {
				if (!database) {
					results = null;
					break;
				}
				const {num, data} = query;
				statement = statements.get(num);
				const args = Array.isArray(data) ? data : [data];
				results = _optionalChain([statement, 'optionalAccess', _6 => _6.get, 'call', _7 => _7(...args)]) || null;
			}
				break;
			case 'run': {
				if (!database) {
					results = null;
					break;
				}
				const {num, data} = query;
				statement = statements.get(num);
				results = _optionalChain([statement, 'optionalAccess', _8 => _8.run, 'call', _9 => _9(...data )]) || null;
			}
				break;
			case 'exec': {
				const {data} = query;
				_optionalChain([database, 'optionalAccess', _10 => _10.exec, 'call', _11 => _11(data)]);
				results = !!database;
			}
				break;
			case 'transaction': {
				if (!database) {
					results = null;
					break;
				}
				const {name, data} = query;
				const transaction = transactions.get(name);
				if (!transaction) {
					results = null;
					break;
				}
				const env = {
					db: database,
					statementsByText: getStatementTable(),
					statementsMap: statements,
				};
				results = transaction(data, env) || null;
			}
				break;
			}
		} catch (error) {
			return crashlog(error, {...query, data: JSON.stringify(query.data)});
		}
		process.send(results);
	});

	process.on('uncaughtException', err => crashlog(err));
	process.on('unhandledRejection', err => crashlog(err ));
}

/**
 * @param options Either an object of filename, extension, or just the string filename
 */
 function SQL(options) {
	if (typeof options === 'string') options = {file: options};
	return exports.PM.createProcess(options) ;
} exports.SQL = SQL;

 //# sourceMappingURL=sourceMaps/sql.js.map