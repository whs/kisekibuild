import {Art, Character, Element, Game, Quartz, Stats, StatsChangeType} from '../../proto/gen/kiseki/v1/data_pb';

export const characters = [
	Character.create({
		name: 'Lloyd Bannings',
		hp: Math.floor(1.15*15*16),
		str: Math.floor(0.055*15*16+20),
		def: Math.floor(0.05*15*16+10),
		ats: Math.floor(0.05*15*16+19),
		adf: Math.floor(0.05*15*16+10),
		dex: Math.floor(0.0025*15*16+20),
		agl: Math.floor(0.0025*15*16+8),
		mov: 4,
		spd: Math.floor(0.0025*15*16+30),
		lines: [
			{
				slots: [
					{level: 2},
				]
			},
			{
				slots: [
					{level: 2},
					{level: 2},
					{level: 2},
				],
				linkedWith: 0,
			},
			{
				slots: [
					{level: 2},
					{level: 2},
					{level: 2},
				],
				linkedWith: 0,
			}
		],
	}),
	Character.create({
		name: 'Elie MacDowell',
		hp: Math.floor(15*16),
		str: Math.floor(0.045*15*16+18),
		def: Math.floor(0.045*15*16+8),
		ats: Math.floor(0.06*15*16+21),
		adf: Math.floor(0.06*15*16+10),
		dex: Math.floor(0.0025*15*16+21),
		agl: Math.floor(0.0025*15*16+10),
		mov: 3,
		spd: Math.floor(0.0025*15*16+29),
		lines: [
			{
				slots: [
					{level: 2, element: Element.WIND},
				]
			},
			{
				slots: [
					{level: 2},
					{level: 2},
					{level: 2},
					{level: 2, element: Element.WIND},
					{level: 2},
				],
				linkedWith: 0,
			},
			{
				slots: [
					{level: 2},
				],
				linkedWith: 0,
			}
		],
	}),
	Character.create({
		name: 'Tio Plato',
		hp: Math.floor(0.85*15*16),
		str: Math.floor(0.005*15*16+25),
		def: Math.floor(0.0475*15*16+9),
		ats: Math.floor(0.0575*15*16+20),
		adf: Math.floor(0.0575*15*16+10),
		dex: Math.floor(0.0025*15*16+20),
		agl: Math.floor(0.0025*15*16+7),
		mov: 3,
		spd: Math.floor(0.0025*15*16+28),
		lines: [
			{
				slots: [
					{level: 2, element: Element.WATER},
					{level: 2},
					{level: 2},
					{level: 2},
					{level: 2, element: Element.WATER},
					{level: 2},
					{level: 2},
				],
			},
		],
	}),
	Character.create({
		name: 'Randy Orlando',
		hp: Math.floor(1.25*15*16),
		str: Math.floor(0.055*15*16+21),
		def: Math.floor(0.055*15*16+11),
		ats: Math.floor(0.0475*15*16+19),
		adf: Math.floor(0.04*15*16+10),
		dex: Math.floor(0.0025*15*16+18),
		agl: Math.floor(0.0025*15*16+9),
		mov: 5,
		spd: Math.floor(0.0025*15*16*27),
		lines: [
			{
				slots: [
					{level: 2, element: Element.FIRE},
				]
			},
			{
				slots: [
					{level: 2},
					{level: 2},
					{level: 2},
				],
				linkedWith: 0,
			},
			{
				slots: [
					{level: 2},
					{level: 2},
				],
				linkedWith: 0,
			},
			{
				slots: [
					{level: 2},
				],
				linkedWith: 0,
			},
		],
	}),
] as Character[];

export const quartz = [
	Quartz.create({
		name: 'Defense 1',
		category: 'Defense',
		element: Element.EARTH,
		value: {earth: 1},
		level: 1,
		statsBonus: [
			{stats: Stats.DEF, amount: 3, type: StatsChangeType.PERCENT},
			{stats: Stats.STR, amount: -1, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'Defense 2',
		category: 'Defense',
		element: Element.EARTH,
		value: {earth: 3},
		level: 1,
		statsBonus: [
			{stats: Stats.DEF, amount: 6, type: StatsChangeType.PERCENT},
			{stats: Stats.STR, amount: -2, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'Defense 3',
		category: 'Defense',
		element: Element.EARTH,
		value: {earth: 5},
		level: 2,
		statsBonus: [
			{stats: Stats.DEF, amount: 9, type: StatsChangeType.PERCENT},
			{stats: Stats.STR, amount: -3, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'Poison',
		element: Element.EARTH,
		value: {earth: 3},
		level: 1,
		hasHitEffect: true,
	}),
	Quartz.create({
		name: 'Petrify',
		element: Element.EARTH,
		hasHitEffect: true,
		value: {earth: 5},
		level: 1,
	}),
	Quartz.create({
		name: 'Septium Vein',
		element: Element.EARTH,
		value: {earth: 3, water: 2},
		level: 1,
	}),
	Quartz.create({
		name: 'Ingenuity',
		element: Element.EARTH,
		value: {earth: 3, water: 2, time: 1},
		level: 2,
	}),
	Quartz.create({
		name: 'Capricorn Gem',
		element: Element.EARTH,
		value: {earth: 5},
		level: 2,
	}),
	Quartz.create({
		name: 'Aries Gem',
		element: Element.EARTH,
		value: {earth: 3, water: 2, time: 1},
		level: 2,
		statsBonus: [
			{stats: Stats.STR, amount: 6, type: StatsChangeType.PERCENT},
			{stats: Stats.DEF, amount: 6, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'HP 1',
		category: 'HP',
		element: Element.WATER,
		value: {water: 1},
		level: 1,
		statsBonus: [
			{stats: Stats.HP, amount: 5, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'HP 2',
		category: 'HP',
		element: Element.WATER,
		value: {water: 3},
		level: 1,
		statsBonus: [
			{stats: Stats.HP, amount: 10, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'HP 3',
		category: 'HP',
		element: Element.WATER,
		value: {water: 5},
		level: 2,
		statsBonus: [
			{stats: Stats.HP, amount: 15, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'Shield 1',
		category: 'Shield',
		element: Element.WATER,
		value: {water: 1},
		level: 1,
		statsBonus: [
			{stats: Stats.ADF, amount: 3, type: StatsChangeType.PERCENT},
			{stats: Stats.ATS, amount: -1, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'Shield 2',
		category: 'Shield',
		element: Element.WATER,
		value: {water: 3},
		level: 1,
		statsBonus: [
			{stats: Stats.ADF, amount: 6, type: StatsChangeType.PERCENT},
			{stats: Stats.ATS, amount: -2, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'Shield 3',
		category: 'Shield',
		element: Element.WATER,
		value: {water: 5},
		level: 2,
		statsBonus: [
			{stats: Stats.ADF, amount: 9, type: StatsChangeType.PERCENT},
			{stats: Stats.ATS, amount: -3, type: StatsChangeType.PERCENT},
		],
	}),
	Quartz.create({
		name: 'Mute',
		element: Element.WATER,
		hasHitEffect: true,
		value: {water: 3},
		level: 1,
	}),
	Quartz.create({
		name: 'Freeze',
		element: Element.WATER,
		hasHitEffect: true,
		value: {water: 5},
		level: 1,
	}),
	Quartz.create({
		name: 'Heal',
		element: Element.WATER,
		value: {water: 3, mirage: 2},
		level: 1,
	}),
	Quartz.create({
		name: 'Effort',
		element: Element.WATER,
		value: {water: 3, earth: 2},
		level: 1,
	}),
	Quartz.create({
		name: 'Aquarius Gem',
		element: Element.WATER,
		value: {water: 5},
		level: 2,
	}),
	Quartz.create({
		name: 'Cancer Gem',
		element: Element.WATER,
		value: {water: 5},
		level: 2,
		statsBonus: [
			{stats: Stats.ATS, amount: 6, type: StatsChangeType.PERCENT},
			{stats: Stats.ADF, amount: 6, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Attack 1',
		category: 'Attack',
		element: Element.FIRE,
		value: {fire: 1},
		level: 1,
		statsBonus: [
			{stats: Stats.STR, amount: 3, type: StatsChangeType.PERCENT},
			{stats: Stats.DEF, amount: -1, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Attack 2',
		category: 'Attack',
		element: Element.FIRE,
		value: {fire: 3},
		level: 1,
		statsBonus: [
			{stats: Stats.STR, amount: 6, type: StatsChangeType.PERCENT},
			{stats: Stats.DEF, amount: -2, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Attack 3',
		category: 'Attack',
		element: Element.FIRE,
		value: {fire: 5},
		level: 2,
		statsBonus: [
			{stats: Stats.STR, amount: 9, type: StatsChangeType.PERCENT},
			{stats: Stats.DEF, amount: -3, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Seal',
		hasHitEffect: true,
		element: Element.FIRE,
		value: {fire: 3},
		level: 1,
	}),
	Quartz.create({
		name: 'Burn',
		hasHitEffect: true,
		element: Element.FIRE,
		value: {fire: 5},
		level: 1,
	}),
	Quartz.create({
		name: 'Strike',
		element: Element.FIRE,
		value: {fire: 3},
		level: 1,
	}),
	Quartz.create({
		name: 'Invigorate',
		element: Element.FIRE,
		value: {fire: 3, wind: 2, space: 1},
		level: 2,
	}),
	Quartz.create({
		name: 'Leo Gem',
		element: Element.FIRE,
		value: {fire: 5},
		level: 2,
	}),
	Quartz.create({
		name: 'Scorpio Gem',
		element: Element.FIRE,
		value: {fire: 5},
		level: 2,
	}),
	Quartz.create({
		name: 'Evade 1',
		category: 'Evade',
		element: Element.WIND,
		value: {wind: 1},
		level: 1,
		statsBonus: [{stats: Stats.EVA, amount: 5, type: StatsChangeType.PERCENT}],
	}),
	Quartz.create({
		name: 'Evade 2',
		category: 'Evade',
		element: Element.WIND,
		value: {wind: 3},
		level: 1,
		statsBonus: [{stats: Stats.EVA, amount: 10, type: StatsChangeType.PERCENT}],
	}),
	Quartz.create({
		name: 'Evade 3',
		category: 'Evade',
		element: Element.WIND,
		value: {wind: 5},
		level: 2,
		statsBonus: [{stats: Stats.EVA, amount: 15, type: StatsChangeType.PERCENT}],
	}),
	Quartz.create({
		name: 'Move 1',
		category: 'Move',
		element: Element.WIND,
		value: {wind: 1},
		level: 1,
		statsBonus: [{stats: Stats.MOV, amount: 1, type: StatsChangeType.FIXED}],
	}),
	Quartz.create({
		name: 'Move 2',
		category: 'Move',
		element: Element.WIND,
		value: {wind: 3, space: 2},
		level: 1,
		statsBonus: [{stats: Stats.MOV, amount: 2, type: StatsChangeType.FIXED}],
	}),
	Quartz.create({
		name: 'Move 3',
		category: 'Move',
		element: Element.WIND,
		value: {wind: 5, space: 3},
		level: 2,
		statsBonus: [{stats: Stats.MOV, amount: 3, type: StatsChangeType.FIXED}],
	}),
	Quartz.create({
		name: 'Blind',
		element: Element.WIND,
		hasHitEffect: true,
		value: {wind: 3},
		level: 1,
	}),
	Quartz.create({
		name: 'Sleep',
		element: Element.WIND,
		hasHitEffect: true,
		value: {wind: 5},
		level: 1,
	}),
	Quartz.create({
		name: 'Prankster',
		element: Element.WIND,
		value: {wind: 3, time: 2},
		level: 1,
	}),
	Quartz.create({
		name: 'Hare',
		element: Element.WIND,
		value: {wind: 3},
		level: 1,
	}),
	Quartz.create({
		name: 'Intimidation',
		element: Element.WIND,
		value: {wind: 3, fire: 2},
		level: 1,
	}),
	Quartz.create({
		name: 'Scent',
		element: Element.WIND,
		value: {wind: 4, earth: 2, water: 2, fire: 2},
		level: 1,
	}),
	Quartz.create({
		name: 'Virgo Gem',
		element: Element.WIND,
		value: {wind: 5},
		level: 2,
	}),
	Quartz.create({
		name: 'Sagittarius Gem',
		element: Element.WIND,
		value: {wind: 5},
		level: 2,
		statsBonus: [
			{stats: Stats.EVA, amount: 10, type: StatsChangeType.PERCENT},
			{stats: Stats.MOV, amount: 6, type: StatsChangeType.FIXED},
		]
	}),
	Quartz.create({
		name: 'Action 1',
		category: 'Action',
		element: Element.TIME,
		value: {time: 1},
		level: 1,
		statsBonus: [
			{stats: Stats.SPD, amount: 10, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Action 2',
		category: 'Action',
		element: Element.TIME,
		value: {time: 3},
		level: 1,
		statsBonus: [
			{stats: Stats.SPD, amount: 20, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Action 3',
		category: 'Action',
		element: Element.TIME,
		value: {time: 5},
		level: 2,
		statsBonus: [
			{stats: Stats.SPD, amount: 30, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Impede 1',
		category: 'Impede',
		element: Element.TIME,
		value: {time: 1},
		level: 1,
		hasHitEffect: true,
	}),
	Quartz.create({
		name: 'Impede 2',
		category: 'Impede',
		element: Element.TIME,
		value: {time: 3, wind: 2},
		level: 1,
		hasHitEffect: true,
	}),
	Quartz.create({
		name: 'Impede 3',
		category: 'Impede',
		element: Element.TIME,
		value: {time: 5, wind: 3},
		level: 2,
		hasHitEffect: true,
	}),
	Quartz.create({
		name: 'Cast',
		element: Element.TIME,
		value: {time: 3},
		level: 1,
	}),
	Quartz.create({
		name: 'Luck',
		element: Element.TIME,
		value: {time: 3},
		level: 1,
	}),
	Quartz.create({
		name: 'Pisces Gem',
		element: Element.TIME,
		value: {time: 5},
		level: 2,
	}),
	Quartz.create({
		name: 'Gemini Gem',
		element: Element.TIME,
		value: {time: 5},
		level: 2,
	}),
	Quartz.create({
		name: 'Hit 1',
		category: 'Hit',
		element: Element.SPACE,
		value: {space: 1},
		level: 1,
		statsBonus: [
			{stats: Stats.ACC, amount: 10, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Hit 2',
		category: 'Hit',
		element: Element.SPACE,
		value: {space: 3},
		level: 1,
		statsBonus: [
			{stats: Stats.ACC, amount: 20, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Hit 3',
		category: 'Hit',
		element: Element.SPACE,
		value: {space: 5},
		level: 2,
		statsBonus: [
			{stats: Stats.ACC, amount: 30, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'EP Cut 1',
		category: 'EP Cut',
		element: Element.SPACE,
		value: {space: 2, time: 1, mirage: 1},
		level: 1,
	}),
	Quartz.create({
		name: 'EP Cut 2',
		category: 'EP Cut',
		element: Element.SPACE,
		value: {space: 3, time: 2, mirage: 2},
		level: 2,
	}),
	Quartz.create({
		name: 'EP Cut 3',
		category: 'EP Cut',
		element: Element.SPACE,
		value: {space: 2, time: 1, mirage: 1},
		level: 2,
	}),
	Quartz.create({
		name: 'Eagle Eye',
		category: 'Information',
		element: Element.SPACE,
		value: {space: 2, mirage: 1},
		level: 1,
	}),
	Quartz.create({
		name: 'Heaven\'s Eye',
		category: 'Information',
		element: Element.SPACE,
		value: {space: 3, fire: 2, mirage: 1},
		level: 1,
	}),
	Quartz.create({
		name: 'Range',
		element: Element.SPACE,
		value: {space: 3},
		level: 1,
	}),
	Quartz.create({
		name: 'Taurus Gem',
		element: Element.SPACE,
		value: {space: 5},
		level: 2,
	}),
	Quartz.create({
		name: 'Solar Gem',
		element: Element.SPACE,
		value: {space: 5, earth: 2, water: 2, fire: 2, wind: 2},
		level: 2,
	}),
	Quartz.create({
		name: 'EP 1',
		category: 'EP',
		element: Element.MIRAGE,
		value: {mirage: 2, time: 1, space: 1},
		level: 1,
		statsBonus: [
			{stats: Stats.EP, amount: 5, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'EP 2',
		category: 'EP',
		element: Element.MIRAGE,
		value: {mirage: 3, time: 2, space: 2},
		level: 1,
		statsBonus: [
			{stats: Stats.EP, amount: 10, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'EP 3',
		category: 'EP',
		element: Element.MIRAGE,
		value: {mirage: 5, time: 3, space: 3},
		level: 2,
		statsBonus: [
			{stats: Stats.EP, amount: 15, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Mind 1',
		category: 'Mind',
		element: Element.MIRAGE,
		value: {mirage: 1},
		level: 1,
		statsBonus: [
			{stats: Stats.ATS, amount: 3, type: StatsChangeType.PERCENT},
			{stats: Stats.ADF, amount: -1, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Mind 2',
		category: 'Mind',
		element: Element.MIRAGE,
		value: {mirage: 3},
		level: 1,
		statsBonus: [
			{stats: Stats.ATS, amount: 6, type: StatsChangeType.PERCENT},
			{stats: Stats.ADF, amount: -2, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Mind 3',
		category: 'Mind',
		element: Element.MIRAGE,
		value: {mirage: 5},
		level: 2,
		statsBonus: [
			{stats: Stats.ATS, amount: 9, type: StatsChangeType.PERCENT},
			{stats: Stats.ADF, amount: -3, type: StatsChangeType.PERCENT},
		]
	}),
	Quartz.create({
		name: 'Confuse',
		element: Element.MIRAGE,
		hasHitEffect: true,
		value: {mirage: 5, earth: 1, water: 1, fire: 1, wind: 1},
		level: 1,
	}),
	Quartz.create({
		name: 'Information',
		category: 'Information',
		element: Element.MIRAGE,
		value: {mirage: 3},
		level: 1,
	}),
	Quartz.create({
		name: 'Detection',
		element: Element.MIRAGE,
		value: {mirage: 2, earth: 1},
		level: 1,
	}),
	Quartz.create({
		name: 'Bewitch',
		element: Element.MIRAGE,
		value: {mirage: 3, space: 2, wind: 1},
		level: 2,
	}),
	Quartz.create({
		name: 'Libra Gem',
		element: Element.MIRAGE,
		value: {mirage: 5},
		level: 2,
	}),
	Quartz.create({
		name: 'Lunar Gem',
		element: Element.MIRAGE,
		value: {mirage: 5, time: 4, space: 4},
		level: 2,
	}),
] as Quartz[];

export const arts = [
	Art.create({
		name: 'Stone Spike',
		costs: {earth: 1},
	}),
	Art.create({
		name: 'Quake',
		costs: {earth: 2},
	}),
	Art.create({
		name: 'Gorgon Breath',
		costs: {earth: 4, wind: 1},
	}),
	Art.create({
		name: 'Gaea Titanis',
		costs: {earth: 6, space: 2},
	}),
	Art.create({
		name: 'Yggdrasil',
		costs: {earth: 10, water: 3, wind: 3},
	}),
	Art.create({
		name: 'Icicle Edge',
		costs: {water: 1},
	}),
	Art.create({
		name: 'Blue Drop',
		costs: {water: 2, space: 1},
	}),
	Art.create({
		name: 'Ice Hammer',
		costs: {water: 4, earth: 1},
	}),
	Art.create({
		name: 'Hydro Cannon',
		costs: {water: 6, wind: 1},
	}),
	Art.create({
		name: 'Diamond Dust',
		costs: {water: 8, wind: 1, space: 1},
	}),
	Art.create({
		name: 'Genesis Flood',
		costs: {water: 12},
	}),
	Art.create({
		name: 'Fire Bolt',
		costs: {fire: 1},
	}),
	Art.create({
		name: 'Heatwave',
		costs: {fire: 3, wind: 1},
	}),
	Art.create({
		name: 'Magna Blaze',
		costs: {fire: 4, earth: 1},
	}),
	Art.create({
		name: 'Flare Butterfly',
		costs: {fire: 8, wind: 3},
	}),
	Art.create({
		name: 'Crimson Ray',
		costs: {fire: 12},
	}),
	Art.create({
		name: 'Sparkle',
		costs: {wind: 1},
	}),
	Art.create({
		name: 'Aero Sickle',
		costs: {wind: 2, time: 1},
	}),
	Art.create({
		name: 'Aerial',
		costs: {wind: 4},
	}),
	Art.create({
		name: 'Spark Dyne',
		costs: {wind: 6, space: 2},
	}),
	Art.create({
		name: 'Thunder Cyclone',
		costs: {wind: 10, time: 2, space: 2},
	}),
	Art.create({
		name: 'Soul Blur',
		costs: {time: 2},
	}),
	Art.create({
		name: 'Death Spiral',
		costs: {time: 6, space: 2, mirage: 2},
	}),
	Art.create({
		name: 'Shadow Blade',
		costs: {time: 10, space: 3, mirage: 3},
	}),
	Art.create({
		name: 'Dark Matter',
		costs: {space: 6},
	}),
	Art.create({
		name: 'Last Disaster',
		costs: {space: 12, mirage: 8},
	}),
	Art.create({
		name: 'Chaos Brand',
		costs: {mirage: 4},
	}),
	Art.create({
		name: 'Galion Tower',
		costs: {mirage: 6, time: 2, space: 2},
	}),
	Art.create({
		name: 'Avalon Gate',
		costs: {mirage: 12, time: 4, space: 4},
	}),
	Art.create({
		name: 'Earth Pulse',
		costs: {earth: 1, water: 1},
	}),
	Art.create({
		name: 'Tear',
		costs: {water: 1},
	}),
	Art.create({
		name: 'Teara',
		costs: {water: 3},
	}),
	Art.create({
		name: 'Tearal',
		costs: {water: 6},
	}),
	Art.create({
		name: 'Thelas',
		costs: {water: 2},
	}),
	Art.create({
		name: 'Athelas',
		costs: {water: 8},
	}),
	Art.create({
		name: 'Impassion',
		costs: {fire: 5, wind: 1, space: 1},
	}),
	Art.create({
		name: 'Breath',
		costs: {wind: 2, water: 1},
	}),
	Art.create({
		name: 'Holy Breath',
		costs: {wind: 4, water: 2},
	}),
	Art.create({
		name: 'Recuria',
		costs: {wind: 5},
	}),
	Art.create({
		name: 'Celestial',
		costs: {space: 10, water: 8},
	}),
	Art.create({
		name: 'Innocence Arc',
		costs: {space: 2},
	}),
	Art.create({
		name: 'Cobalt Sphere',
		costs: {water: 2, time: 1},
	}),
	Art.create({
		name: 'Lorelei',
		costs: {wind: 6, time: 1, space: 2, mirage: 2},
	}),
	Art.create({
		name: 'Chrono Down',
		costs: {time: 1},
	}),
	Art.create({
		name: 'Calamity Claw',
		costs: {time: 8},
	}),
	Art.create({
		name: 'Lunar Craze',
		costs: {mirage: 8},
	}),
	Art.create({
		name: 'Crest',
		costs: {earth: 1},
	}),
	Art.create({
		name: 'La Crest',
		costs: {earth: 3},
	}),
	Art.create({
		name: 'Adamantine Guard',
		costs: {earth: 8, space: 3},
	}),
	Art.create({
		name: 'Aqua Mirage',
		costs: {water: 5, wind: 3},
	}),
	Art.create({
		name: 'Forte',
		costs: {fire: 1},
	}),
	Art.create({
		name: 'La Forte',
		costs: {fire: 3},
	}),
	Art.create({
		name: 'Sylphid',
		costs: {wind: 2, space: 1},
	}),
	Art.create({
		name: 'Chrono Drive',
		costs: {time: 3},
	}),
	Art.create({
		name: 'Fortuna',
		costs: {space: 4, water: 1},
	}),
	Art.create({
		name: 'A-Reflex',
		costs: {space: 6},
	}),
	Art.create({
		name: 'Saint',
		costs: {mirage: 3, earth: 1, fire: 1},
	}),
	Art.create({
		name: 'Hollow Sphere',
		costs: {mirage: 5, water: 3, wind: 3},
	}),
] as Art[];

export default Game.create({
	name: 'Trails from Zero',
	characters: characters,
	quartz: quartz,
	arts: arts,
}) as Game;
