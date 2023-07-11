// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// OR/AS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Insurgence Singles",
		column: 1,
	},
	{
		name: "[Gen 6] Random Battle",

		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ou/">ORAS OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133793/">ORAS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 6] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286277/">ORAS Ubers</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/uu/">ORAS UU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3598164/">ORAS UU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought'],
	},
	{
		name: "[Gen 6] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ru/">ORAS RU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3574583/">ORAS RU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 6] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/nu/">ORAS NU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3555650/">ORAS NU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 6] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/pu/">ORAS PU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3528743/">ORAS PU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] NU'],
		banlist: ['NU', 'PUBL', 'Chatter'],
	},
	{
		name: "[Gen 6] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
			'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
			'Aipom-Delta', 'Tangela-Delta', 'Scyther-Delta', 'Misdreavus-Delta', 'Yanma-Delta', 'Dwebble-Delta-C',
		],
	},
	{
		name: "[Gen 6] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031459/">ORAS 1v1</a>`,
		],

		mod: 'gen6',
		ruleset: [
			'Max Team Size = 3', 'Picked Team Size = 1', 'Obtainable', 'Nickname Clause', 'Moody Clause', 'OHKO Clause',
			'Evasion Moves Clause', 'Accuracy Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod',
			'Cancel Mod', 'Team Preview',
		],
		banlist: [
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal',
			'Zekrom', 'Focus Sash', 'Soul Dew', 'Grass Whistle', 'Hypnosis', 'Perish Song', 'Sing', 'Yawn',
		],
	},
	{
		name: "[Gen 6] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3523229/">ORAS Anything Goes</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3548945/">ORAS AG Resources</a>`,
		],

		mod: 'gen6',
		ruleset: ['Obtainable', 'Team Preview', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/zu/">ORAS ZU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8034679/">ORAS ZU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] PU'],
		banlist: ['PU', 'Fraxure', 'Regigigas', 'Simisear'],
	},
	{
		name: "[Gen 6] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3537407/">ORAS CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8752281/">ORAS CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8752280/">ORAS CAP Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] OU', '+CAP'],
		banlist: ['Cawmodore'],
	},
	{
		name: "[Gen 6] 3v3 Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3527960/">ORAS Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3554616/">ORAS BSS Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// OR/AS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "Insurgence Doubles/Triples",
		column: 1,
	},
	{
		name: "[Gen 6] Doubles AG",
		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles'],
	},
	{
		name: "[Gen 6] 4v4 Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3558332/">VGC 2016 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3580592/">VGC 2016 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},
	{
		name: "[Gen 6] Triples Custom Game",

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Singles",
		column: 3,
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712619/">Random Battle Suggestions</a>`,
		],

		mod: 'gen9',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710848/">National Dex Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712168/">National Dex Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712170/">National Dex Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712169/">National Dex Ubers Viability List</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause'],
		banlist: ['ND AG', 'Assist', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711752/">National Dex UU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Battle Bond'],
	},
	{
		name: "[Gen 9] National Dex RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713801/">National Dex RU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL', 'Drizzle', 'Heat Rock', 'Light Clay'],
	},
	{
		name: "[Gen 9] National Dex Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710738/">National Dex Monotype Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Terastal Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Sleep Clause Mod', 'Evasion Items Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack',
			'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Houndstone',
			'Iron Bundle', 'Kangaskhan-Mega', 'Kartana', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete', 'Moody', 'Shadow Tag', 'Power Construct', 'Booster Energy', 'Damp Rock',
			'Focus Band', 'Icy Rock', 'King\'s Rock', 'Quick Claw', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 9] National Dex LC",
		mod: 'gen9',
		ruleset: ['Little Cup', 'Standard NatDex', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Magby', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix',
			'Tangela', 'Vullaby', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web', 'Dunsparce', 'Flittle',
			'Aipom-Delta', 'Tangela-Delta', 'Qwilfish-Hisui', 'Mr. Mime-Galar', 'Basculin', 'Type: Null', 'Scyther-Delta', 'Misdreavus-Delta', 'Yanma-Delta',
			'Dwebble-Delta-C', 'Yanma', 'Murkrow', 'Misdreavus', 'Girafarig', 'Gligar',
		],
	},
	{
		name: "[Gen 9] National Dex 1v1",
		mod: 'gen9',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard NatDex', 'Terastal Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause',
		],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mew', 'Mewtwo', 'Mimikyu', 'Miraidon', 'Necrozma', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Snorlax', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zekrom', 'Moody', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw',
			'Acupressure', 'Hypnosis', 'Perish Song', 'Sing', 'Grass Whistle', 'Lovely Kiss', 'Detect + Fightinium Z',
			'Cryogonal-Mega', 'Hoopa-Delta-Unleashed' , 'Hydreigon-Mega-Five', 'Metagross-Delta-R-Mega', 'Metagross-Delta-S-Mega', 'Mewtwo-Shadow', 'Regigigas-Primal',
			'Volcarona-Delta', 'pokemon:volcaronadeltaarmor', 'pokemon:zekromarmor', 'Arceus-Primal', 'Giratina-Primal', 'Metagross-Delta-R-Crystal',
			'Arceus', 'Darkrai', 'Deoxys', 'Metagross-Delta-R', 'Gengar-Mega', 'Salamence-Mega', 'Shaymin-Sky', 'Kangaskhan-Mega',
		],
	},
	{
		name: "[Gen 9] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 9] National Dex CAP",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 9] National Dex 3v3 Singles",

		mod: 'gen9',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
		banlist: ['Sub-Legendary'],
	},
	{
		name: "[Gen 9] Custom Game",

		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// National Dex Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Doubles",
		column: 3,
	},
	{
		name: "[Gen 9] National Dex Doubles AG",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard NatDex Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 9] National Dex 4v4 Doubles",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// Draft League
	///////////////////////////////////////////////////////////////////

	{
		section: "Draft",
		column: 2,
	},
	{
		name: "[Gen 6] Draft",

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Draft'],
	},
	{
		name: "[Gen 9] NatDex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Draft', '+Unobtainable', '+Past', '+PastMove'],
	},
	{
		name: "[Gen 9] Tera Preview NatDex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] NatDex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] NatDex 6v6 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Draft', '!Sleep Clause Mod', '!Evasion Moves Clause', '+Unobtainable', '+Past', '+PastMove', 'Min Source Gen = 3'],
	},
	{
		name: "[Gen 9] NatDex 4v4 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Draft', 'Item Clause', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Moves Clause', '!! Adjust Level = 50', 'Picked Team Size = 4', '+Unobtainable', '+Past', '+PastMove', 'Min Source Gen = 3'],
	},
	{
		name: "[Gen 9] NatDex Draft LC",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['LC Draft', '+Unobtainable', '+Past', '+PastMove', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] NatDex Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Draft', '+Past', '+PastMove'],
	},
	{
		name: "[Gen 8] NatDex 4v4 Doubles Draft",

		mod: 'gen8',
		searchShow: false,
		name: "[Gen 8] NatDex Draft LC",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['LC Draft', '+Past', '+PastMove', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 7] Draft",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Draft', '+LGPE'],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 6] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9029427/">ORAS Pure Hackmons</a>`,
		],

		mod: 'gen6',
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'EV limit = 510'],
	},
	{
		name: "[Gen 6] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411583/">ORAS Monotype</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause', 'Same Type Clause'],
		banlist: [
			'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect',
			'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White',
			'Lucario-Mega', 'Lugia', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye-Mega',
			'Salamence-Mega', 'Shaymin-Sky', 'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Soul Dew', 'Baton Pass',
		],
	},
	{
		name: "[Gen 6] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8772336/">ORAS Almost Any Ability</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] OU', 'Ability Clause = 2', 'AAA Restricted Abilities', '!Obtainable Abilities'],
		banlist: ['Archeops', 'Bisharp', 'Chatot', 'Dragonite', 'Keldeo', 'Kyurem-Black', 'Mamoswine', 'Regigigas', 'Shedinja', 'Slaking', 'Smeargle', 'Snorlax', 'Suicune', 'Terrakion', 'Weavile', 'Dynamic Punch', 'Zap Cannon'],
		unbanlist: ['Aegislash', 'Blaziken', 'Deoxys-Defense', 'Deoxys-Speed', 'Genesect', 'Greninja', 'Landorus'],
		restricted: ['Arena Trap', 'Contrary', 'Fur Coat', 'Huge Power', 'Illusion', 'Imposter', 'Parental Bond', 'Protean', 'Pure Power', 'Simple', 'Speed Boost', 'Wonder Guard'],
	},
	{
		name: "[Gen 6] STABmons",
		desc: "Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.",
		threads: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547279/\">STABmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558034/\">STABmons Viability Ranking</a>",
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] OU', 'STABmons Move Legality'],
		banlist: ['Diggersby', 'Kyurem-Black', 'Porygon-Z', 'Thundurus', 'Aerodactylite', 'Altarianite', "King's Rock", 'Metagrossite', 'Razor Fang'],
	},
	// {
	// 	name: "[Gen 6] Inverse Battle",
	// 	desc: "Battle with an inverted type chart.",
	// 	threads: [
	// 		"&bullet; <a href=\"https://www.smogon.com/forums/threads/3518146/\">Inverse Battle</a>",
	// 		"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526371/\">Inverse Battle Viability Ranking</a>",
	// 	],
		
	// 	mod: 'gen6',
	// 	ruleset: ['Standard', 'Baton Pass Clause', 'Swagger Clause', 'Inverse Mod'],
	// 	banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Diggersby', 'Giratina-Origin', 'Groudon',
	// 		'Ho-Oh', 'Hoopa-Unbound', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Serperior',
	// 		'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Gengarite', 'Kangaskhanite', 'Salamencite', 'Soul Dew', 'Shadow Tag',
	// 	],
	// 	onNegateImmunity: false,
	// 	onEffectiveness: function (typeMod, target, type, move) {
	// 		// The effectiveness of Freeze Dry on Water isn't reverted
	// 		if (move && move.id === 'freezedry' && type === 'Water') return;
	// 		if (move && !this.getImmunity(move, type)) return 1;
	// 		return -typeMod;
	// 	},
	// },
	{
		name: "[Gen 6] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen6',
		team: 'randomFactory',
		searchShow: false,
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	// {
	// 	name: "[Gen 9] Almost Any Ability",
	// 	desc: `Pok&eacute;mon have access to almost any ability.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3710568/">Almost Any Ability</a>`,
	// 	],

	// 	mod: 'gen9',
	// 	ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
	// 	banlist: [
	// 		'Annihilape', 'Flutter Mane', 'Koraidon', 'Miraidon', 'Slaking', 'Arena Trap', 'Comatose', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion',
	// 		'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag',
	// 		'Simple', 'Speed Boost', 'Stakeout', 'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Baton Pass', 'Revival Blessing',
	// 	],
	// },
	// {
	// 	name: "[Gen 9] Balanced Hackmons",
	// 	desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3710859/">Balanced Hackmons</a>`,
	// 	],

	// 	mod: 'gen9',
	// 	ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Moves Clause', 'Endless Battle Clause'],
	// 	banlist: [
	// 		'Calyrex-Shadow', 'Arena Trap', 'Contrary', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Neutralizing Gas',
	// 		'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Comatose + Sleep Talk',
	// 		'Belly Drum', 'Last Respects', 'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Rage Fist',
	// 	],
	// },
	// {
	// 	name: "[Gen 9] Mix and Mega",
	// 	desc: `Mega evolve any Pok&eacute;mon with any mega stone and no limit. Boosts based on mega evolution from gen 7.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3710921/">Mix and Mega</a>`,
	// 	],

	// 	mod: 'mixandmega',
	// 	ruleset: ['Standard OMs', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Min Source Gen = 9'],
	// 	banlist: [
	// 		'Koraidon', 'Miraidon', 'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite',
	// 		'Medichamite', 'Moody', 'Shadow Tag', 'Baton Pass', 'Electrify', 'Shed Tail', 'Zap Cannon',
	// 	],
	// 	restricted: ['Flutter Mane', 'Gengar', 'Iron Bundle', 'Kilowattrel', 'Slaking'],
	// 	onValidateTeam(team) {
	// 		const itemTable = new Set<ID>();
	// 		for (const set of team) {
	// 			const item = this.dex.items.get(set.item);
	// 			if (!item.megaStone) continue;
	// 			const natdex = this.ruleTable.has('standardnatdex');
	// 			if (natdex && item.id !== 'ultranecroziumz') continue;
	// 			const species = this.dex.species.get(set.species);
	// 			if (species.isNonstandard && !this.ruleTable.has(`+${this.toID(species.isNonstandard)}`)) {
	// 				return [`${species.baseSpecies} does not exist in gen 9.`];
	// 			}
	// 			if (natdex && species.name.startsWith('Necrozma-') && item.id === 'ultranecroziumz') {
	// 				continue;
	// 			}
	// 			if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
	// 				return [`${species.name} is not allowed to hold ${item.name}.`];
	// 			}
	// 			if (itemTable.has(item.id)) {
	// 				return [`You are limited to one of each mega stone.`, `(You have more than one ${item.name})`];
	// 			}
	// 			itemTable.add(item.id);
	// 		}
	// 	},
	// 	onBegin() {
	// 		for (const pokemon of this.getAllPokemon()) {
	// 			pokemon.m.originalSpecies = pokemon.baseSpecies.name;
	// 		}
	// 	},
	// 	onSwitchIn(pokemon) {
	// 		// @ts-ignore
	// 		const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
	// 		if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
	// 			// Place volatiles on the Pokémon to show its mega-evolved condition and details
	// 			this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
	// 			const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
	// 			if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
	// 				this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
	// 			}
	// 		}
	// 	},
	// 	onSwitchOut(pokemon) {
	// 		// @ts-ignore
	// 		const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
	// 		if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
	// 			this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
	// 		}
	// 	},
	// },
	// {
	// 	name: "[Gen 9] Godly Gift",
	// 	desc: `Each Pok&eacute;mon receives one base stat from a God (AG/Uber Pok&eacute;mon) depending on its position in the team. If there is no Uber Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3710734/">Godly Gift</a>`,
	// 	],

	// 	mod: 'gen9',
	// 	ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Godly Gift Mod', 'Min Source Gen = 9'],
	// 	banlist: ['Blissey', 'Chansey', 'Espathra', 'Great Tusk', 'Iron Hands', 'Iron Valiant', 'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Booster Energy', 'Baton Pass'],
	// },
	// {
	// 	name: "[Gen 9] STABmons",
	// 	desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3710577/">STABmons</a>`,
	// 	],

	// 	mod: 'gen9',
	// 	ruleset: ['Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Min Source Gen = 9'],
	// 	banlist: ['Chien-Pao', 'Chi-Yu', 'Dragapult', 'Flutter Mane', 'Iron Bundle', 'Komala', 'Koraidon', 'Miraidon', 'Arena Trap', 'Moody', 'Shadow Tag', 'Booster Energy', 'King\'s Rock', 'Baton Pass'],
	// 	restricted: ['Acupressure', 'Astral Barrage', 'Belly Drum', 'Extreme Speed', 'Fillet Away', 'Last Respects', 'No Retreat', 'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Shift Gear', 'V-create', 'Victory Dance', 'Wicked Blow'],
	// },
	// {
	// 	name: "[Gen 9] NFE",
	// 	desc: `Only Pok&eacute;mon that can evolve are allowed.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3710638/">NFE</a>`,
	// 	],

	// 	mod: 'gen9',
	// 	ruleset: ['Standard OMs', 'Not Fully Evolved', 'Sleep Moves Clause', 'Min Source Gen = 9'],
	// 	banlist: [
	// 		'Bisharp', 'Chansey', 'Haunter', 'Magneton', 'Primeape', 'Scyther', 'Arena Trap', 'Shadow Tag', 'Baton Pass',
	// 		// Shouldn't be legal
	// 		'Stantler', 'Ursaring',
	// 	],
	// },
	// {
	// 	name: "[Gen 9] Cross Evolution",
	// 	desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and up to 2 moves from the next stage Pok&eacute;mon.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3710953/">Cross Evolution</a>`,
	// 	],

	// 	mod: 'gen9',
	// 	ruleset: ['Standard OMs', 'Ability Clause = 2', 'Sleep Moves Clause', 'Min Source Gen = 9'],
	// 	banlist: ['Arena Trap', 'Huge Power', 'Pure Power', 'Shadow Tag', 'Moody', 'King\'s Rock', 'Baton Pass'],
	// 	onValidateTeam(team) {
	// 		const names = new Set<ID>();
	// 		for (const set of team) {
	// 			const name = set.name;
	// 			if (names.has(this.dex.toID(name))) {
	// 				return [
	// 					`Your Pok\u00e9mon must have different nicknames.`,
	// 					`(You have more than one Pok\u00e9mon named '${name}')`,
	// 				];
	// 			}
	// 			names.add(this.dex.toID(name));
	// 		}
	// 		if (!names.size) {
	// 			return [
	// 				`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
	// 				`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
	// 			];
	// 		}
	// 	},
	// 	checkCanLearn(move, species, lsetData, set) {
	// 		// @ts-ignore
	// 		if (!set.sp?.exists || !set.crossSpecies?.exists) {
	// 			return this.checkCanLearn(move, species, lsetData, set);
	// 		}
	// 		// @ts-ignore
	// 		const problem = this.checkCanLearn(move, set.sp);
	// 		if (!problem) return null;
	// 		// @ts-ignore
	// 		if (this.checkCanLearn(move, set.crossSpecies)) return problem;
	// 		return null;
	// 	},
	// 	validateSet(set, teamHas) {
	// 		const crossSpecies = this.dex.species.get(set.name);
	// 		let problems = this.dex.formats.get('Obtainable Misc').onChangeSet?.call(this, set, this.format) || null;
	// 		if (Array.isArray(problems) && problems.length) return problems;
	// 		const crossNonstandard = (!this.ruleTable.has('standardnatdex') && crossSpecies.isNonstandard === 'Past') ||
	// 			crossSpecies.isNonstandard === 'Future';
	// 		const crossIsCap = !this.ruleTable.has('+pokemontag:cap') && crossSpecies.isNonstandard === 'CAP';
	// 		if (!crossSpecies.exists || crossNonstandard || crossIsCap) return this.validateSet(set, teamHas);
	// 		const species = this.dex.species.get(set.species);
	// 		const check = this.checkSpecies(set, species, species, {});
	// 		if (check) return [check];
	// 		const nonstandard = !this.ruleTable.has('standardnatdex') && species.isNonstandard === 'Past';
	// 		const isCap = !this.ruleTable.has('+pokemontag:cap') && species.isNonstandard === 'CAP';
	// 		if (!species.exists || nonstandard || isCap || species === crossSpecies) return this.validateSet(set, teamHas);
	// 		if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
	// 		const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
	// 			!this.ruleTable.has('+unobtainable'));
	// 		if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
	// 			return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
	// 		}
	// 		if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
	// 			return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
	// 		}
	// 		const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
	// 		if (!crossPrevoSpecies.prevo !== !species.prevo) {
	// 			return [
	// 				`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
	// 			];
	// 		}
	// 		const item = this.dex.items.get(set.item);
	// 		if (item.itemUser?.length) {
	// 			if (!item.itemUser.includes(crossSpecies.name) || crossSpecies.name !== species.name) {
	// 				return [`${species.name} cannot use ${item.name} because it is cross evolved into ${crossSpecies.name}.`];
	// 			}
	// 		}
	// 		const ability = this.dex.abilities.get(set.ability);
	// 		if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
	// 			set.species = crossSpecies.name;
	// 		}

	// 		// @ts-ignore
	// 		set.sp = species;
	// 		// @ts-ignore
	// 		set.crossSpecies = crossSpecies;
	// 		problems = this.validateSet(set, teamHas);
	// 		set.name = crossSpecies.name;
	// 		set.species = species.name;
	// 		return problems;
	// 	},
	// 	onModifySpecies(species, target, source, effect) {
	// 		if (!target) return; // chat
	// 		if (effect && ['imposter', 'transform'].includes(effect.id)) return;
	// 		if (target.set.name === target.set.species) return;
	// 		const crossSpecies = this.dex.species.get(target.set.name);
	// 		if (!crossSpecies.exists) return;
	// 		if (species.battleOnly || !species.nfe) return;
	// 		const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
	// 			!this.ruleTable.has('+unobtainable'));
	// 		if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
	// 		const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
	// 		if (!crossPrevoSpecies.prevo !== !species.prevo) return;

	// 		const mixedSpecies = this.dex.deepClone(species);
	// 		mixedSpecies.weightkg =
	// 			Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
	// 		mixedSpecies.nfe = false;
	// 		mixedSpecies.evos = [];
	// 		mixedSpecies.eggGroups = crossSpecies.eggGroups;
	// 		mixedSpecies.abilities = crossSpecies.abilities;
	// 		mixedSpecies.bst = 0;
	// 		let i: StatID;
	// 		for (i in species.baseStats) {
	// 			const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
	// 			mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
	// 			mixedSpecies.bst += mixedSpecies.baseStats[i];
	// 		}
	// 		if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
	// 		if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
	// 			mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
	// 		}
	// 		if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

	// 		return mixedSpecies;
	// 	},
	// 	onBegin() {
	// 		for (const pokemon of this.getAllPokemon()) {
	// 			pokemon.baseSpecies = pokemon.species;
	// 		}
	// 	},
	// },
	// {
	// 	name: "[Gen 9] Fortemons",
	// 	desc: `Put an attacking move in the item slot to have all of a Pok&eacute;mon's attacks inherit its properties.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3713983/">Fortemons</a>`,
	// 	],

	// 	mod: 'gen9',
	// 	searchShow: false,
	// 	ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Min Source Gen = 9'],
	// 	banlist: ['Koraidon', 'Miraidon', 'Palafin', 'Covert Cloak', 'Fake Out'],
	// 	restricted: ['Dynamic Punch', 'Inferno', 'Mud Slap', 'Nuzzle', 'Power Trip', 'Rapid Spin', 'Stored Power', 'Zap Cannon'],
	// 	validateSet(set, teamHas) {
	// 		const item = set.item;
	// 		const species = this.dex.species.get(set.species);
	// 		const move = this.dex.moves.get(item);
	// 		if (!move.exists || move.id === 'metronome' || move.category === 'Status') {
	// 			return this.validateSet(set, teamHas);
	// 		}
	// 		set.item = '';
	// 		const problems = this.validateSet(set, teamHas) || [];
	// 		set.item = item;
	// 		if (this.checkCanLearn(move, species, this.allSources(species), set)) {
	// 			problems.push(`${species.name} can't learn ${move.name}.`);
	// 		}
	// 		if ((move.secondaries?.some(secondary => secondary.boosts?.accuracy && secondary.boosts.accuracy < 0) ||
	// 			move.multihit || move.id === 'beatup' || move.flags['charge'] || move.priority > 0 || move.damageCallback) &&
	// 			!this.ruleTable.has(`+move:${move.id}`)) {
	// 			problems.push(`The move ${move.name} can't be used as an item.`);
	// 		}
	// 		return problems.length ? problems : null;
	// 	},
	// 	onBegin() {
	// 		for (const pokemon of this.getAllPokemon()) {
	// 			const move = this.dex.getActiveMove(pokemon.set.item);
	// 			if (move.exists && move.category !== 'Status') {
	// 				pokemon.m.forte = move;
	// 				pokemon.item = 'mail' as ID;
	// 			}
	// 		}
	// 	},
	// 	onModifyMovePriority: 1,
	// 	onModifyMove(move, pokemon, target) {
	// 		const forte: ActiveMove = pokemon.m.forte;
	// 		if (move.category !== 'Status' && forte) {
	// 			move.flags = {...move.flags, ...forte.flags};
	// 			if (forte.self) {
	// 				if (forte.self.onHit && move.self?.onHit) {
	// 					for (const i in forte.self) {
	// 						if (i.startsWith('onHit')) continue;
	// 						(move.self as any)[i] = (forte.self as any)[i];
	// 					}
	// 				} else {
	// 					move.self = {...(move.self || {}), ...forte.self};
	// 				}
	// 			}
	// 			if (forte.selfBoost?.boosts) {
	// 				if (!move.selfBoost?.boosts) move.selfBoost = {boosts: {}};
	// 				let boostid: BoostID;
	// 				for (boostid in forte.selfBoost.boosts) {
	// 					if (!move.selfBoost.boosts![boostid]) move.selfBoost.boosts![boostid] = 0;
	// 					move.selfBoost.boosts![boostid]! += forte.selfBoost.boosts[boostid]!;
	// 				}
	// 			}
	// 			if (forte.secondaries) {
	// 				move.secondaries = [...(move.secondaries || []), ...forte.secondaries];
	// 			}
	// 			move.critRatio = (move.critRatio || 1) + (forte.critRatio || 1) - 1;
	// 			const VALID_PROPERTIES = [
	// 				'alwaysHit', 'basePowerCallback', 'breaksProtect', 'drain', 'forceSTAB', 'forceSwitch', 'hasCrashDamage', 'hasSheerForce',
	// 				'ignoreAbility', 'ignoreAccuracy', 'ignoreDefensive', 'ignoreEvasion', 'ignoreImmunity', 'mindBlownRecoil', 'noDamageVariance',
	// 				'ohko', 'overrideDefensivePokemon', 'overrideDefensiveStat', 'overrideOffensivePokemon', 'overrideOffensiveStat', 'pseudoWeather',
	// 				'recoil', 'selfdestruct', 'selfSwitch', 'sleepUsable', 'smartTarget', 'stealsBoosts', 'thawsTarget', 'volatileStatus', 'willCrit',
	// 			] as const;
	// 			for (const property of VALID_PROPERTIES) {
	// 				if (forte[property]) {
	// 					move[property] = forte[property] as any;
	// 				}
	// 			}
	// 		}
	// 	},
	// 	onModifyPriority(priority, source, target, move) {
	// 		if (move.category !== 'Status' && source?.m.forte) {
	// 			if (source.hasAbility('Triage') && source.m.forte.flags['heal']) {
	// 				return priority + (move.flags['heal'] ? 0 : 3);
	// 			}
	// 			return priority + source.m.forte.priority;
	// 		}
	// 	},
	// 	onHitPriority: 1,
	// 	onHit(target, source, move) {
	// 		const forte = source.m.forte;
	// 		if (move?.category !== 'Status' && forte) {
	// 			if (forte.onHit) this.singleEvent('Hit', forte, {}, target, source, move);
	// 			if (forte.self?.onHit) this.singleEvent('Hit', forte.self, {}, source, source, move);
	// 			if (forte.onAfterHit) this.singleEvent('AfterHit', forte, {}, target, source, move);
	// 		}
	// 	},
	// 	onAfterSubDamage(damage, target, source, move) {
	// 		const forte = source.m.forte;
	// 		if (move?.category !== 'Status' && forte?.onAfterSubDamage) {
	// 			this.singleEvent('AfterSubDamage', forte, null, target, source, move);
	// 		}
	// 	},
	// 	onModifySecondaries(secondaries, target, source, move) {
	// 		if (secondaries.some(s => !!s.self)) move.selfDropped = false;
	// 	},
	// 	onAfterMoveSecondaryPriority: 1,
	// 	onAfterMoveSecondarySelf(source, target, move) {
	// 		const forte = source.m.forte;
	// 		if (move?.category !== 'Status' && forte?.onAfterMoveSecondarySelf) {
	// 			this.singleEvent('AfterMoveSecondarySelf', forte, null, source, target, move);
	// 		}
	// 	},
	// 	onBasePowerPriority: 1,
	// 	onBasePower(basePower, source, target, move) {
	// 		const forte = source.m.forte;
	// 		if (move.category !== 'Status' && forte?.onBasePower) {
	// 			this.singleEvent('BasePower', forte, null, source, target, move, basePower);
	// 		}
	// 	},
	// 	pokemon: {
	// 		getItem() {
	// 			const move = this.battle.dex.moves.get(this.m.forte);
	// 			if (!move.exists) return Object.getPrototypeOf(this).getItem.call(this);
	// 			return {...this.battle.dex.items.get('mail'), ignoreKlutz: true, onTakeItem: false};
	// 		},
	// 	},
	// },
	// {
	// 	name: "[Gen 9] Full Potential",
	// 	desc: `Pok&eacute;mon's moves hit off of their highest stat.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3711127/">Full Potential</a>`,
	// 	],

	// 	mod: 'fullpotential',
	// 	searchShow: false,
	// 	ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
	// 	banlist: [
	// 		'Chien-Pao', 'Cyclizar', 'Dragapult', 'Espathra', 'Flutter Mane', 'Iron Bundle', 'Koraidon', 'Miraidon', 'Scream Tail', 'Arena Trap',
	// 		'Chlorophyll', 'Drought', 'Moody', 'Sand Rush', 'Shadow Tag', 'Slush Rush', 'Swift Swim', 'Unburden', 'Booster Energy', 'Choice Scarf',
	// 		'Heat Rock', 'King\'s Rock', 'Baton Pass', 'Tailwind',
	// 	],
	// },
	// {
	// 	name: "[Gen 9] Inheritance",
	// 	desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3712296/">Inheritance</a>`,
	// 	],

	// 	mod: 'gen9',
	// 	ruleset: ['Standard OMs', 'Ability Clause = 2', 'Sleep Moves Clause', 'Min Source Gen = 9'],
	// 	banlist: ['Koraidon', 'Miraidon', 'Slaking', 'Arena Trap', 'Huge Power', 'Imposter', 'Pure Power', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Shell Smash'],
	// 	getEvoFamily(speciesid) {
	// 		let species = Dex.species.get(speciesid);
	// 		while (species.prevo) {
	// 			species = Dex.species.get(species.prevo);
	// 		}
	// 		return species.id;
	// 	},
	// 	validateSet(set, teamHas) {
	// 		const unreleased = (pokemon: Species) => pokemon.tier === "Unreleased" && pokemon.isNonstandard === "Unobtainable";
	// 		if (!teamHas.abilityMap) {
	// 			teamHas.abilityMap = Object.create(null);
	// 			for (const pokemon of Dex.species.all()) {
	// 				if (pokemon.isNonstandard || (unreleased(pokemon) && !this.ruleTable.has('+unobtainable'))) continue;
	// 				if (pokemon.requiredAbility || pokemon.requiredItem || pokemon.requiredMove) continue;
	// 				if (this.ruleTable.isBannedSpecies(pokemon)) continue;

	// 				for (const key of Object.values(pokemon.abilities)) {
	// 					const abilityId = this.dex.toID(key);
	// 					if (abilityId in teamHas.abilityMap) {
	// 						teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](pokemon.id);
	// 					} else {
	// 						teamHas.abilityMap[abilityId] = [pokemon.id];
	// 					}
	// 				}
	// 			}
	// 		}

	// 		const problem = this.validateForme(set);
	// 		if (problem.length) return problem;

	// 		const species = this.dex.species.get(set.species);
	// 		if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
	// 		if (species.isNonstandard || (unreleased(species) && !this.ruleTable.has('+unobtainable'))) {
	// 			return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
	// 		}

	// 		const name = set.name;
	// 		if (this.ruleTable.isBannedSpecies(species)) {
	// 			return this.validateSet(set, teamHas);
	// 		}

	// 		const ability = this.dex.abilities.get(set.ability);
	// 		if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
	// 		const pokemonWithAbility = teamHas.abilityMap[ability.id];
	// 		if (!pokemonWithAbility) return [`${ability.name} is not available on a legal Pok\u00e9mon.`];

	// 		(this.format as any).debug = true;

	// 		if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
	// 		const validSources: string[] = teamHas.abilitySources[this.dex.toID(set.species)] = []; // Evolution families

	// 		let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).

	// 		for (const donor of pokemonWithAbility) {
	// 			const donorSpecies = this.dex.species.get(donor);
	// 			let format = this.format;
	// 			if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
	// 			const evoFamily = format.getEvoFamily!(donorSpecies.id);
	// 			if (validSources.includes(evoFamily)) continue;

	// 			set.species = donorSpecies.name;
	// 			set.name = donorSpecies.baseSpecies;
	// 			const problems = this.validateSet(set, teamHas) || [];
	// 			if (!problems.length) {
	// 				validSources.push(evoFamily);
	// 				canonicalSource = donorSpecies.name;
	// 			}
	// 			// Specific for the basic implementation of Donor Clause (see onValidateTeam).
	// 			if (validSources.length > 1) break;
	// 		}
	// 		(this.format as any).debug = false;

	// 		set.name = name;
	// 		set.species = species.name;
	// 		if (!validSources.length) {
	// 			if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
	// 			return [`${name} has an illegal set with an ability from ${this.dex.species.get(pokemonWithAbility[0]).name}.`];
	// 		}

	// 		// Protocol: Include the data of the donor species in the `ability` data slot.
	// 		// Afterwards, we are going to reset the name to what the user intended.
	// 		set.ability = `${set.ability}0${canonicalSource}`;
	// 		return null;
	// 	},
	// 	onValidateTeam(team, f, teamHas) {
	// 		if (this.ruleTable.has('abilityclause')) {
	// 			const abilityTable = new Map<string, number>();
	// 			const base: {[k: string]: string} = {
	// 				airlock: 'cloudnine',
	// 				armortail: 'queenlymajesty',
	// 				battlearmor: 'shellarmor',
	// 				clearbody: 'whitesmoke',
	// 				dazzling: 'queenlymajesty',
	// 				emergencyexit: 'wimpout',
	// 				filter: 'solidrock',
	// 				gooey: 'tanglinghair',
	// 				insomnia: 'vitalspirit',
	// 				ironbarbs: 'roughskin',
	// 				libero: 'protean',
	// 				minus: 'plus',
	// 				moxie: 'chillingneigh',
	// 				powerofalchemy: 'receiver',
	// 				propellertail: 'stalwart',
	// 				teravolt: 'moldbreaker',
	// 				turboblaze: 'moldbreaker',
	// 			};
	// 			const num = parseInt(this.ruleTable.valueRules.get('abilityclause')!);
	// 			for (const set of team) {
	// 				let ability = this.toID(set.ability.split('0')[0]);
	// 				if (!ability) continue;
	// 				if (ability in base) ability = base[ability] as ID;
	// 				if ((abilityTable.get(ability) || 0) >= num) {
	// 					return [
	// 						`You are limited to ${num} of each ability by ${num} Ability Clause.`,
	// 						`(You have more than ${num} ${this.dex.abilities.get(ability).name} variants)`,
	// 					];
	// 				}
	// 				abilityTable.set(ability, (abilityTable.get(ability) || 0) + 1);
	// 			}
	// 		}

	// 		// Donor Clause
	// 		const evoFamilyLists = [];
	// 		for (const set of team) {
	// 			const abilitySources = teamHas.abilitySources?.[this.dex.toID(set.species)];
	// 			if (!abilitySources) continue;
	// 			let format = this.format;
	// 			if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
	// 			evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
	// 		}

	// 		// Checking actual full incompatibility would require expensive algebra.
	// 		// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
	// 		const requiredFamilies = Object.create(null);
	// 		for (const evoFamilies of evoFamilyLists) {
	// 			if (evoFamilies.length !== 1) continue;
	// 			const [familyId] = evoFamilies;
	// 			if (!(familyId in requiredFamilies)) {
	// 				requiredFamilies[familyId] = 1;
	// 			} else {
	// 				requiredFamilies[familyId]++;
	// 			}
	// 			if (requiredFamilies[familyId] > 1) {
	// 				return [
	// 					`You are limited to up to one inheritance from each evolution family by the Donor Clause.`,
	// 					`(You inherit more than once from ${this.dex.species.get(familyId).name}).`,
	// 				];
	// 			}
	// 		}
	// 	},
	// 	onBegin() {
	// 		for (const pokemon of this.getAllPokemon()) {
	// 			if (pokemon.baseAbility.includes('0')) {
	// 				const donor = pokemon.baseAbility.split('0')[1];
	// 				pokemon.m.donor = this.toID(donor);
	// 				pokemon.baseAbility = this.toID(pokemon.baseAbility.split('0')[0]);
	// 				pokemon.ability = pokemon.baseAbility;
	// 			}
	// 		}
	// 	},
	// 	onSwitchIn(pokemon) {
	// 		if (!pokemon.m.donor) return;
	// 		const donorTemplate = this.dex.species.get(pokemon.m.donor);
	// 		if (!donorTemplate.exists) return;
	// 		// Place volatiles on the Pokémon to show the donor details.
	// 		this.add('-start', pokemon, donorTemplate.name, '[silent]');
	// 	},
	// },
	// {
	// 	name: "[Gen 9] Pokebilities",
	// 	desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3679692/">Pok&eacute;bilities</a>`,
	// 	],
	// 	mod: 'pokebilities',
	// 	ruleset: ['Standard OMs', 'Sleep Clause Mod'],
	// 	banlist: ['Flutter Mane', 'Houndstone', 'Iron Bundle', 'Koraidon', 'Miraidon', 'Palafin', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass'],
	// 	onValidateSet(set) {
	// 		const species = this.dex.species.get(set.species);
	// 		const unSeenAbilities = Object.keys(species.abilities)
	// 			.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
	// 			.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
	// 			.filter(ability => ability !== set.ability);
	// 		if (unSeenAbilities.length && this.toID(set.ability) !== this.toID(species.abilities['S'])) {
	// 			for (const abilityName of unSeenAbilities) {
	// 				const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
	// 				if (banReason) {
	// 					return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
	// 				}
	// 			}
	// 		}
	// 	},
	// 	onBegin() {
	// 		for (const pokemon of this.getAllPokemon()) {
	// 			if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
	// 				continue;
	// 			}
	// 			pokemon.m.innates = Object.keys(pokemon.species.abilities)
	// 				.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
	// 				.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
	// 				.filter(ability => ability !== pokemon.ability);
	// 		}
	// 	},
	// 	onBeforeSwitchIn(pokemon) {
	// 		// Abilities that must be applied before both sides trigger onSwitchIn to correctly
	// 		// handle switch-in ability-to-ability interactions, e.g. Intimidate counters
	// 		const neededBeforeSwitchInIDs = [
	// 			'clearbody', 'competitive', 'contrary', 'defiant', 'fullmetalbody', 'hypercutter', 'innerfocus',
	// 			'mirrorarmor', 'oblivious', 'owntempo', 'rattled', 'scrappy', 'simple', 'whitesmoke',
	// 		];
	// 		if (pokemon.m.innates) {
	// 			for (const innate of pokemon.m.innates) {
	// 				if (!neededBeforeSwitchInIDs.includes(innate)) continue;
	// 				if (pokemon.hasAbility(innate)) continue;
	// 				pokemon.addVolatile("ability:" + innate, pokemon);
	// 			}
	// 		}
	// 	},
	// 	onSwitchInPriority: 2,
	// 	onSwitchIn(pokemon) {
	// 		if (pokemon.m.innates) {
	// 			for (const innate of pokemon.m.innates) {
	// 				if (pokemon.hasAbility(innate)) continue;
	// 				pokemon.addVolatile("ability:" + innate, pokemon);
	// 			}
	// 		}
	// 	},
	// 	onSwitchOut(pokemon) {
	// 		for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
	// 			pokemon.removeVolatile(innate);
	// 		}
	// 	},
	// 	onFaint(pokemon) {
	// 		for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
	// 			const innateEffect = this.dex.conditions.get(innate) as Effect;
	// 			this.singleEvent('End', innateEffect, null, pokemon);
	// 		}
	// 	},
	// 	onAfterMega(pokemon) {
	// 		for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
	// 			pokemon.removeVolatile(innate);
	// 		}
	// 		pokemon.m.innates = undefined;
	// 	},
	// },
	// {
	// 	name: "[Gen 9] Pure Hackmons",
	// 	desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3712086/">Pure Hackmons</a>`,
	// 	],

	// 	mod: 'gen9',
	// 	ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	// },
	// {
	// 	name: "[Gen 9] Shared Power",
	// 	desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3711011/">Shared Power</a>`,
	// 	],

	// 	mod: 'sharedpower',
	// 	ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Min Source Gen = 9'],
	// 	banlist: [
	// 		'Chien-Pao', 'Gholdengo', 'Koraidon', 'Komala', 'Miraidon', 'Ting-Lu', 'Anger Shell', 'Arena Trap', 'Armor Tail', 'Contrary', 'Dazzling',
	// 		'Drought', 'Electric Surge', 'Guts', 'Huge Power', 'Imposter', 'Magic Bounce', 'Magnet Pull', 'Mold Breaker', 'Moody', 'Poison Heal',
	// 		'Prankster', 'Pure Power', 'Purifying Salt', 'Queenly Majesty', 'Quick Draw', 'Quick Feet', 'Regenerator', 'Sand Rush', 'Shadow Tag',
	// 		'Simple', 'Slush Rush', 'Speed Boost', 'Stakeout', 'Stench', 'Sturdy', 'Swift Swim', 'Tinted Lens', 'Unaware', 'Unburden', 'Starf Berry',
	// 		'King\'s Rock', 'Baton Pass',
	// 	],
	// 	getSharedPower(pokemon) {
	// 		const sharedPower = new Set<string>();
	// 		for (const ally of pokemon.side.pokemon) {
	// 			if (ally.previouslySwitchedIn > 0) {
	// 				if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
	// 					sharedPower.add('noability');
	// 					continue;
	// 				}
	// 				sharedPower.add(ally.baseAbility);
	// 			}
	// 		}
	// 		sharedPower.delete(pokemon.baseAbility);
	// 		return sharedPower;
	// 	},
	// 	onBeforeSwitchIn(pokemon) {
	// 		let format = this.format;
	// 		if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
	// 		for (const ability of format.getSharedPower!(pokemon)) {
	// 			const effect = 'ability:' + ability;
	// 			pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
	// 			if (!pokemon.m.abils) pokemon.m.abils = [];
	// 			if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
	// 		}
	// 	},
	// 	onSwitchInPriority: 2,
	// 	onSwitchIn(pokemon) {
	// 		let format = this.format;
	// 		if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
	// 		for (const ability of format.getSharedPower!(pokemon)) {
	// 			if (ability === 'noability') {
	// 				this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
	// 			}
	// 			const effect = 'ability:' + ability;
	// 			delete pokemon.volatiles[effect];
	// 			pokemon.addVolatile(effect);
	// 		}
	// 	},
	// },

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "[Gen 9] Monotype Random Battle",

		mod: 'gen9',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Random Battle Mayhem",
		desc: `[Gen 9] Random Battle with Team Preview and elements of Camomons, Inverse, Scalemons, and Shared Power.`,

		mod: 'sharedpower',
		team: 'random',
		ruleset: ['[Gen 9] Random Battle', 'Team Preview', 'Camomons Mod', 'Inverse Mod', 'Scalemons Mod'],
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 9] Computer-Generated Teams",
		desc: `Teams generated automatically based on heuristics (rules), with levels based on previous success/failure in battle. ` +
			`Not affiliated with Random Battles formats. Some sets will by nature be worse than others, but you can report egregiously bad sets ` +
			`with <a href="https://forms.gle/DYwQN5qGVegz3YU38">this form</a>.`,

		mod: 'gen9',
		team: 'computerGenerated',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen9',
		team: 'randomHC',
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Nonexistent'],
	},
	{
		name: "[Gen 9] Doubles Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item. Now with TWICE the Pok&eacute;mon per side!`,

		mod: 'gen9',
		team: 'randomHC',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] Hackmons Cup'],
	},
	{
		name: "[Gen 9] Broken Cup",
		desc: `[Gen 9] Hackmons Cup but with only the most powerful Pok&eacute;mon, moves, abilities, and items.`,

		team: 'randomHC',
		searchShow: false,
		ruleset: ['[Gen 9] Hackmons Cup'],
		banlist: ['All Pokemon', 'All Abilities', 'All Items', 'All Moves'],
		unbanlist: [
			'10,000,000 Volt Thunderbolt', 'Abomasnow-Mega', 'Absol-Mega', 'Accelerock', 'Acid Spray', 'Adaptability',
			'Aeroblast', 'Aerodactyl-Mega', 'Aggron', 'Aggron-Mega', 'Aguav Berry', 'Air Balloon', 'Air Slash', 'Alakazam-Mega',
			'Altaria-Mega', 'Ampharos-Mega', 'Analytic', 'Anchor Shot', 'Anger Shell', 'Annihilape', 'Anticipation', 'Apple Acid',
			'Aqua Step', 'Arcanine', 'Arcanine-Hisui', 'Archeops', 'Arena Trap', 'Armarouge', 'Armor Cannon', 'Aromatherapy',
			'Articuno', 'Articuno-Galar', 'Assault Vest', 'Astral Barrage', 'Attack Order', 'Audino-Mega', 'Aura Sphere',
			'Axe Kick', 'Azelf', 'Baddy Bad', 'Baneful Bunker', 'Banette-Mega', 'Barb Barrage', 'Basculegion', 'Basculegion-F',
			'Baton Pass', 'Baxcalibur', 'Beads of Ruin', 'Beak Blast', 'Beast Boost', 'Behemoth Bash', 'Behemoth Blade',
			'Belly Drum', 'Berserk', 'Bitter Blade', 'Bitter Malice', 'Blacephalon', 'Blastoise', 'Blastoise-Mega', 'Blaziken',
			'Blaziken-Mega', 'Blazing Torque', 'Bleakwind Storm', 'Blissey', 'Blizzard', 'Blue Flare', 'Blunder Policy',
			'Body Press', 'Body Slam', 'Bolt Beak', 'Bolt Strike', 'Boomburst', 'Bouncy Bubble', 'Brave Bird', 'Bright Powder',
			'Brute Bonnet', 'Bug Buzz', 'Buginium Z', 'Bullet Punch', 'Buzzwole', 'Buzzy Buzz', 'Calm Mind', 'Calyrex-Ice',
			'Calyrex-Shadow', 'Camerupt-Mega', 'Catastropika', 'Ceaseless Edge', 'Celebi', 'Celesteela', 'Centiskorch',
			'Ceruledge', 'Charizard', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Chatter', 'Chesnaught', 'Chesto Berry', 'Chi-Yu',
			'Chien-Pao', 'Chilan Berry', 'Chilly Reception', 'Choice Band', 'Choice Scarf', 'Choice Specs', 'Cinderace',
			'Circle Throw', 'Clanging Scales', 'Clangorous Soul', 'Clangorous Soulblaze', 'Clear Amulet', 'Close Combat',
			'Cloyster', 'Cobalion', 'Coil', 'Collision Course', 'Comatose', 'Combat Torque', 'Competitive', 'Compound Eyes',
			'Contrary', 'Core Enforcer', 'Cosmic Power', 'Cotton Guard', 'Court Change', 'Covert Cloak', 'Crabhammer',
			'Cresselia', 'Crobat', 'Custap Berry', 'Dark Pulse', 'Darkest Lariat', 'Darkinium Z', 'Darkrai', 'Darmanitan-Galar-Zen',
			'Darmanitan-Zen', 'Decidueye', 'Decidueye-Hisui', 'Defend Order', 'Defiant', 'Defog', 'Delphox', 'Deoxys',
			'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Desolate Land', 'Dialga', 'Dialga-Origin', 'Diamond Storm',
			'Diancie', 'Diancie-Mega', 'Dire Claw', 'Disable', 'Discharge', 'Dondozo', 'Doom Desire', 'Double Iron Bash',
			'Download', 'Draco Meteor', 'Draco Plate', 'Dragapult', 'Dragon Ascent', 'Dragon Dance', 'Dragon Darts',
			'Dragon Energy', 'Dragon Hammer', 'Dragon Pulse', 'Dragon Tail', 'Dragonite', 'Dragonium Z', 'Drain Punch',
			'Dread Plate', 'Drill Peck', 'Drizzle', 'Drought', 'Drum Beating', 'Dry Skin', 'Duraludon', 'Dusknoir',
			'Dynamax Cannon', 'Earth Eater', 'Earth Plate', 'Earth Power', 'Earthquake', 'Eerie Spell', 'Effect Spore',
			'Eject Pack', 'Electivire', 'Electric Surge', 'Electrium Z', 'Electro Drift', 'Emboar', 'Empoleon', 'Enamorus',
			'Enamorus-Therian', 'Encore', 'Energy Ball', 'Entei', 'Eruption', 'Espeon', 'Esper Wing', 'Eternatus',
			'Eternatus-Eternamax', 'Exeggutor', 'Exeggutor-Alola', 'Expanding Force', 'Expert Belt', 'Explosion',
			'Extreme Evoboost', 'Extreme Speed', 'Fairium Z', 'Fake Out', 'Feraligatr', 'Fiery Wrath', 'Fightinium Z',
			'Figy Berry', 'Filter', 'Fire Blast', 'Fire Lash', 'Firium Z', 'First Impression', 'Fishious Rend', 'Fist Plate',
			'Flame Body', 'Flame Charge', 'Flame Plate', 'Flamethrower', 'Flare Blitz', 'Flareon', 'Flash Cannon', 'Fleur Cannon',
			'Flip Turn', 'Floaty Fall', 'Florges', 'Flower Trick', 'Fluffy', 'Flutter Mane', 'Flyinium Z', 'Focus Blast',
			'Focus Sash', 'Forewarn', 'Foul Play', 'Freeze-Dry', 'Freezing Glare', 'Freezy Frost', 'Frost Breath', 'Fur Coat',
			'Fusion Bolt', 'Fusion Flare', 'Future Sight', 'G-Max Cannonade', 'G-Max Centiferno', 'G-Max Resonance', 'G-Max Steelsurge',
			'G-Max Stonesurge', 'G-Max Sweetness', 'G-Max Vine Lash', 'G-Max Volcalith', 'G-Max Wildfire', 'G-Max Wind Rage',
			'Gallade-Mega', 'Garchomp', 'Garchomp-Mega', 'Gardevoir-Mega', 'Gear Grind', 'Genesect', 'Genesis Supernova',
			'Gengar-Mega', 'Gholdengo', 'Ghostium Z', 'Giga Drain', 'Gigaton Hammer', 'Giratina', 'Giratina-Origin',
			'Glaceon', 'Glacial Lance', 'Glaive Rush', 'Glalie-Mega', 'Glare', 'Glastrier', 'Glimmora', 'Glitzy Glow', 'Gogoat',
			'Golisopod', 'Good as Gold', 'Goodra', 'Goodra-Hisui', 'Gooey', 'Gorilla Tactics', 'Grassium Z', 'Grassy Surge',
			'Grav Apple', 'Great Tusk', 'Greninja', 'Greninja-Ash', 'Groudon', 'Groudon-Primal', 'Groundium Z',
			'Guardian of Alola', 'Gunk Shot', 'Guzzlord', 'Gyarados', 'Gyarados-Mega', 'Hadron Engine', 'Hammer Arm', 'Haxorus',
			'Haze', 'Head Charge', 'Head Smash', 'Headlong Rush', 'Heal Bell', 'Heal Order', 'Healing Wish', 'Heart Swap',
			'Heat Crash', 'Heat Wave', 'Heatran', 'Heavy-Duty Boots', 'Heracross-Mega', 'High Horsepower', 'High Jump Kick',
			'Hippowdon', 'Ho-Oh', 'Hoopa', 'Hoopa-Unbound', 'Horn Leech', 'Houndoom-Mega', 'Huge Power', 'Hurricane', 'Hydreigon',
			'Hydro Steam', 'Hyper Drill', 'Iapapa Berry', 'Ice Beam', 'Ice Hammer', 'Ice Scales', 'Ice Shard', 'Ice Spinner',
			'Icicle Plate', 'Icium Z', 'Illusion', 'Imposter', 'Incineroar', 'Infernape', 'Innards Out', 'Insect Plate',
			'Inteleon', 'Intimidate', 'Intrepid Sword', 'Iron Barbs', 'Iron Bundle', 'Iron Hands', 'Iron Head', 'Iron Jugulis',
			'Iron Leaves', 'Iron Moth', 'Iron Plate', 'Iron Thorns', 'Iron Treads', 'Iron Valiant', 'Jet Punch', 'Jirachi',
			'Jolteon', 'Judgment', 'Kangaskhan-Mega', 'Kartana', 'Keldeo', 'Keldeo-Resolute', 'King\'s Rock', 'King\'s Shield',
			'Kingambit', 'Kingdra', 'Knock Off', 'Kommo-o', 'Koraidon', 'Kyogre', 'Kyogre-Primal', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Landorus', 'Landorus-Therian', 'Lapras', 'Last Respects', 'Latias', 'Latias-Mega', 'Latios',
			'Latios-Mega', 'Lava Plume', 'Leaf Blade', 'Leaf Storm', 'Leafeon', 'Leech Life', 'Leech Seed', 'Leftovers',
			'Leppa Berry', 'Let\'s Snuggle Forever', 'Levitate', 'Libero', 'Liechi Berry', 'Life Orb', 'Light Screen',
			'Light That Burns the Sky', 'Light of Ruin', 'Lightning Rod', 'Liquidation', 'Lopunny-Mega', 'Lovely Kiss',
			'Low Kick', 'Lucario', 'Lucario-Mega', 'Lugia', 'Lum Berry', 'Lumina Crash', 'Lunala', 'Lunar Blessing',
			'Lunar Dance', 'Lunge', 'Mach Punch', 'Magearna', 'Magic Bounce', 'Magic Guard', 'Magical Torque', 'Magma Storm',
			'Magmortar', 'Magnezone', 'Mago Berry', 'Make It Rain', 'Malicious Moonsault', 'Mamoswine', 'Manaphy',
			'Manectric-Mega', 'Marshadow', 'Max Guard', 'Meadow Plate', 'Megahorn', 'Meganium', 'Melmetal', 'Meloetta',
			'Meloetta-Pirouette', 'Memento', 'Menacing Moonraze Maelstrom', 'Mental Herb', 'Meowscarada', 'Mesprit', 'Metagross',
			'Metagross-Mega', 'Meteor Beam', 'Meteor Mash', 'item: Metronome', 'Mew', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Milk Drink', 'Milotic', 'Mind Plate', 'Minimize', 'Miraidon', 'Mirror Herb', 'Misty Explosion', 'Misty Surge',
			'Mold Breaker', 'Moltres', 'Moltres-Galar', 'Moody', 'Moonblast', 'Moongeist Beam', 'Moonlight', 'Morning Sun',
			'Mortal Spin', 'Mountain Gale', 'Moxie', 'Multiscale', 'Muscle Band', 'Mystical Fire', 'Mystical Power', 'Naganadel',
			'Nasty Plot', 'Nature\'s Madness', 'Necrozma', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra',
			'Neutralizing Gas', 'Night Daze', 'Night Shade', 'Nihilego', 'No Retreat', 'Noivern', 'Normalium Z', 'Noxious Torque',
			'Nuzzle', 'Oblivion Wing', 'Obstruct', 'Oceanic Operetta', 'Octolock', 'Opportunist', 'Orichalcum Pulse',
			'Origin Pulse', 'Outrage', 'Overdrive', 'Overheat', 'Palafin-Hero', 'Palkia', 'Palkia-Origin', 'Parental Bond',
			'Parting Shot', 'Perish Body', 'Petaya Berry', 'Pheromosa', 'Photon Geyser', 'Pidgeot-Mega', 'Pinsir-Mega',
			'Pixie Plate', 'Plasma Fists', 'Play Rough', 'Poison Heal', 'Poisonium Z', 'Pollen Puff', 'Poltergeist',
			'Population Bomb', 'Porygon-Z', 'Power Gem', 'Power Trip', 'Power Whip', 'Prankster', 'Precipice Blades', 'Primarina',
			'Primordial Sea', 'Probopass', 'Protean', 'Protect', 'Psyblade', 'Psychic Fangs', 'Psychic Surge', 'Psychic',
			'Psychium Z', 'Psycho Boost', 'Psyshield Bash', 'Psystrike', 'Pulverizing Pancake', 'Pure Power', 'Purifying Salt',
			'Pursuit', 'Pyro Ball', 'Quaquaval', 'Quick Claw', 'Quiver Dance', 'Rage Fist', 'Raging Bull', 'Raging Fury', 'Raikou',
			'Rapid Spin', 'Rayquaza', 'Rayquaza-Mega', 'Razor Claw', 'Recover', 'Red Card', 'Reflect', 'Regenerator', 'Regice',
			'Regidrago', 'Regieleki', 'Regigigas', 'Regirock', 'Registeel', 'Reshiram', 'Rest', 'Revelation Dance',
			'Revival Blessing', 'Rhyperior', 'Rillaboom', 'Roaring Moon', 'Rockium Z', 'Rocky Helmet', 'Roost', 'Rough Skin',
			'Ruination', 'Sacred Fire', 'Sacred Sword', 'Salac Berry', 'Salamence', 'Salamence-Mega', 'Salt Cure', 'Samurott',
			'Samurott-Hisui', 'Sandsear Storm', 'Sandy Shocks', 'Sap Sipper', 'Sappy Seed', 'Scald', 'Sceptile', 'Sceptile-Mega',
			'Scizor-Mega', 'Scope Lens', 'Scream Tail', 'Searing Shot', 'Searing Sunraze Smash', 'Secret Sword', 'Seed Flare',
			'Seismic Toss', 'Serene Grace', 'Serperior', 'Shadow Ball', 'Shadow Bone', 'Shadow Shield', 'Shadow Sneak',
			'Shadow Tag', 'Sharpedo-Mega', 'Shaymin', 'Shaymin-Sky', 'Shed Tail', 'Sheer Force', 'Shell Side Arm',
			'Shell Smash', 'Shield Dust', 'Shift Gear', 'Silk Scarf', 'Silk Trap', 'Silvally', 'Simple', 'Sinister Arrow Raid',
			'Sitrus Berry', 'Sizzly Slide', 'Skeledirge', 'Sky Plate', 'Slack Off', 'Slaking', 'Sleep Powder', 'Slither Wing',
			'Slowbro-Mega', 'Sludge Bomb', 'Sludge Wave', 'Snarl', 'Snipe Shot', 'Snorlax', 'Soft-Boiled', 'Solgaleo',
			'Solid Rock', 'Soul-Heart', 'Soul-Stealing 7-Star Strike', 'Spacial Rend', 'Sparkly Swirl', 'Spectral Thief',
			'Spectrier', 'Speed Boost', 'Spikes', 'Spiky Shield', 'Spin Out', 'Spirit Break', 'Spirit Shackle', 'Splash Plate',
			'Splintered Stormshards', 'Splishy Splash', 'Spooky Plate', 'Spore', 'Springtide Storm', 'Stakataka', 'Stakeout',
			'Stamina', 'Stealth Rock', 'Steam Eruption', 'Steelium Z', 'Steelix-Mega', 'Sticky Web', 'Stoked Sparksurfer',
			'Stone Axe', 'Stone Edge', 'Stone Plate', 'Stored Power', 'Storm Drain', 'Storm Throw', 'Strange Steam',
			'Strength Sap', 'Sucker Punch', 'Suicune', 'Sunsteel Strike', 'Super Fang', 'Superpower', 'Supreme Overlord', 'Surf',
			'Surging Strikes', 'Swampert', 'Swampert-Mega', 'Sword of Ruin', 'Swords Dance', 'Sylveon', 'Synthesis',
			'Tablets of Ruin', 'Tail Glow', 'Tangrowth', 'Tapu Bulu', 'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Taunt',
			'Techno Blast', 'Teleport', 'Tera Blast', 'Teravolt', 'Terrakion', 'Thick Fat', 'Thousand Arrows', 'Thousand Waves',
			'Throat Spray', 'Thunder Cage', 'Thunder Wave', 'Thunder', 'Thunderbolt', 'Thunderous Kick', 'Thundurus', 'Thundurus-Therian',
			'Tidy Up', 'Ting-Lu', 'Tinted Lens', 'Togekiss', 'Topsy-Turvy', 'Torch Song', 'Tornadus', 'Tornadus-Therian', 'Torterra',
			'Tough Claws', 'Toxic Debris', 'Toxic Plate', 'Toxic Spikes', 'Toxic', 'Tri Attack', 'Triage', 'Triple Arrows',
			'Triple Axel', 'Turboblaze', 'Type: Null', 'Typhlosion', 'Typhlosion-Hisui', 'Tyranitar', 'Tyranitar-Mega', 'U-turn',
			'Umbreon', 'Unaware', 'Unburden', 'Ursaluna', 'Urshifu', 'Urshifu-Rapid-Strike', 'Uxie', 'V-create', 'Vanilluxe',
			'Vaporeon', 'Venusaur', 'Venusaur-Mega', 'Vessel of Ruin', 'Victini', 'Victory Dance', 'Virizion', 'Volcanion',
			'Volcarona', 'Volt Absorb', 'Volt Switch', 'Volt Tackle', 'Walking Wake', 'Walrein', 'Water Absorb', 'Water Bubble',
			'Water Shuriken', 'Water Spout', 'Waterfall', 'Waterium Z', 'Wave Crash', 'Weakness Policy', 'Well-Baked Body',
			'White Herb', 'Wicked Blow', 'Wicked Torque', 'Wide Lens', 'Wiki Berry', 'Wild Charge', 'Wildbolt Storm',
			'Will-O-Wisp', 'Wise Glasses', 'Wish', 'Wishiwashi-School', 'Wo-Chien', 'Wonder Guard', 'Wood Hammer', 'Wyrdeer',
			'Xerneas', 'Xurkitree', 'Yawn', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zap Plate',
			'Zapdos', 'Zapdos-Galar', 'Zarude', 'Zekrom', 'Zeraora', 'Zing Zap', 'Zippy Zap', 'Zygarde', 'Zygarde-Complete',
		],
	},
	{
		name: "[Gen 9] Challenge Cup 1v1",

		mod: 'gen9',
		team: 'randomCC',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Terastal Clause', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 9] Challenge Cup 2v2",

		mod: 'gen9',
		team: 'randomCC',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Picked Team Size = 2'],
	},
	{
		name: "[Gen 9] Challenge Cup 6v6",

		mod: 'gen9',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 7] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
		],

		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
		column: 4,
	},
	{
		name: "[Gen 8] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">SS National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667921/">SS National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">SS National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: ['ND Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass'],
	},
	{
		name: "[Gen 8] National Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672486/">National Dex UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672482/">National Dex UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay', 'Slowbronite'],
	},
	{
		name: "[Gen 8] National Dex RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672486/">National Dex UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672482/">National Dex UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL'],
	},
	{
		name: "[Gen 8] National Dex LC",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard NatDex', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Magby', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix',
			'Tangela', 'Vullaby', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web',
			'Aipom-Delta', 'Tangela-Delta', 'Mr. Mime-Galar', 'Type: Null', 'Scyther-Delta', 'Misdreavus-Delta', 'Yanma-Delta',
			'Dwebble-Delta-C', 'Yanma', 'Murkrow', 'Misdreavus', 'Gligar',
		],
	},
	{
		name: "[Gen 8] National Dex Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard NatDex', 'Dynamax Clause'],
		banlist: [
			'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Moody', 'Power Construct', 'Shadow Tag', 'Damp Rock',
			'Focus Band', 'King\'s Rock', 'Quick Claw', 'Smooth Rock', 'Terrain Extender', 'Acupressure', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] National Dex 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen8',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', '+Unobtainable', '+Past', 'Sketch Post-Gen 7 Moves', '+PastMove', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause',
		],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Snorlax', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zekrom', 'Moody', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw',
			'Acupressure', 'Hypnosis', 'Perish Song', 'Sing', 'Grass Whistle', 'Lovely Kiss', 'Detect + Fightinium Z',
			'Cryogonal-Mega', 'Hoopa-Delta-Unleashed' , 'Hydreigon-Mega-Five', 'Metagross-Delta-R-Mega', 'Metagross-Delta-S-Mega', 'Mewtwo-Shadow', 'Regigigas-Primal',
			'Volcarona-Delta', 'pokemon:volcaronadeltaarmor', 'pokemon:zekromarmor', 'Arceus-Primal', 'Giratina-Primal', 'Metagross-Delta-R-Crystal',
			'Arceus', 'Darkrai', 'Deoxys', 'Metagross-Delta-R', 'Gengar-Mega', 'Salamence-Mega', 'Shaymin-Sky', 'Kangaskhan-Mega',
		],
	},
	{
		name: "[Gen 8] National Dex AG",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 8] National Dex CAP",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 8] National Dex 3v3 Singles",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
	},
	{
		name: "[Gen 8] Custom Game",
		mod: 'gen8',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Doubles",
		column: 4,
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		searchShow: false,
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] National Dex Doubles AG",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard NatDex Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 8] National Dex 4v4 Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
		column: 5,
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/tags/ou/">USM OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8162240/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 7] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286276/">USM Ubers</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 7] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621217/">USM UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641346/">USM UU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought', 'Kommonium Z', 'Mewnium Z'],
	},
	{
		name: "[Gen 7] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645338/">USM RU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645873/">USM RU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] UU'],
		banlist: ['UU', 'RUBL', 'Mimikyu', 'Aurora Veil'],
		unbanlist: ['Drought'],
	},
	{
		name: "[Gen 7] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632667/">USM NU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645166/">USM NU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] RU'],
		banlist: ['RU', 'NUBL', 'Drought'],
	},
	{
		name: "[Gen 7] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3611496/">USM PU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3614892/">USM PU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 7] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">USM LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3639319/">USM LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">USM LC Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
			'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Wingull', 'Yanma',
			'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
			'Aipom-Delta', 'Tangela-Delta', 'Type: Null', 'Scyther-Delta', 'Misdreavus-Delta', 'Yanma-Delta',
			'Dwebble-Delta-C',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411581/">USM Monotype</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 7] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031460/">USUM 1v1</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Swagger Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
		banlist: [
			'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mew', 'Mewtwo',
			'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky',
			'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom', 'Moody', 'Focus Sash', 'Grass Whistle', 'Hypnosis',
			'Perish Song', 'Sing', 'Detect + Fightinium Z',
		],
	},
	{
		name: "[Gen 7] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">Anything Goes Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646736/">Anything Goes Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 7] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646743/">ZU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3643412/">ZU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646739/">ZU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] PU'],
		banlist: [
			'PU', 'Carracosta', 'Crabominable', 'Exeggutor-Base', 'Gorebyss', 'Jynx', 'Raticate-Alola',
			'Shiftry', 'Throh', 'Turtonator', 'Type: Null', 'Ursaring', 'Victreebel',
		],
	},
	{
		name: "[Gen 7] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621207/">USUM CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691482/">USUM CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691484/">USUM CAP Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', '+CAP'],
	},
	{
		name: "[Gen 7] 3v3 Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601012/">Introduction to Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3605970/">Battle Spot Singles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601658/">Battle Spot Singles Role Compendium</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3619162/">Battle Spot Singles Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// US/UM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles",
		column: 5,
	},
	{
		name: "[Gen 7] Doubles AG",
		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles'],
	},
	{
		name: "[Gen 7] 4v4 Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
	},
	{
		name: "[Gen 7 Let's Go] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671748/#post-8685222">LGPE Doubles OU</a>`,
		],

		mod: 'gen7letsgo',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Sleep Clause Mod'],
		banlist: ['Mewtwo'],
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},
];
