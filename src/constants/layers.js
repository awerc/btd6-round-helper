export const TYPE = {
    special: 'special',
    boss: 'boss',
};

export const LAYERS = {
    red: {
        name: 'red',
        rbe: 1,
        children: [],
        speed: 1,
    },
    blue: {
        name: 'blue',
        rbe: 2,
        children: [{name: 'red', count: 1}],
        speed: 1.4,
    },
    green: {
        name: 'green',
        rbe: 3,
        children: [{name: 'blue', count: 1}],
        speed: 1.8,
    },
    yellow: {
        name: 'yellow',
        rbe: 4,
        children: [{name: 'green', count: 1}],
        speed: 3.2,
    },
    pink: {
        name: 'pink',
        rbe: 5,
        children: [{name: 'yellow', count: 1}],
        speed: 3.5,
    },
    black: {
        name: 'black',
        rbe: 11,
        children: [{name: 'pink', count: 2}],
        speed: 1.8,
        notes: ['Immune to explosions'],
    },
    white: {
        name: 'white',
        rbe: 11,
        children: [{name: 'pink', count: 2}],
        speed: 2,
        notes: ['Immune to being frozen'],
    },
    purple: {
        name: 'purple',
        rbe: 11,
        children: [{name: 'pink', count: 2}],
        speed: 3,
        notes: ['Immune to all energy, fire and plasma attacks'],
    },
    lead: {
        name: 'lead',
        rbe: 23,
        children: [{name: 'black', count: 2}],
        speed: 3,
        notes: ['Immune to any sharp stuff', 'Too heavy to be picked up by Tempest Tornadoes or Whirlwinds'],
    },
    zebra: {
        name: 'zebra',
        rbe: 23,
        children: [
            {name: 'black', count: 1},
            {name: 'white', count: 1},
        ],
        speed: 1.8,
        notes: ['Immune to explosions and freezing'],
    },
    rainbow: {
        name: 'rainbow',
        rbe: 47,
        children: [{name: 'zebra', count: 2}],
        speed: 2.2,
    },
    ceramic: {
        name: 'ceramic',
        rbe: 104,
        children: [{name: 'rainbow', count: 2}],
        speed: 2.5,
        notes: ['Takes 10 hits to break it open (38 in freeplay)', "It won't be slowed down by Glue Gunners"],
    },
    golden: {
        name: 'golden',
        type: TYPE.special,
        rbe: 300,
        children: [],
        speed: 3.5,
        notes: [
            'It has camo and lead properties',
            'It gives Monkey Money and Special Agents instead of cash',
            'Appears from the exit of the track and moves to the beginning',
        ],
    },
    ghost: {
        name: 'ghost',
        type: TYPE.special,
        rbe: 10000000,
        children: [],
        speed: 1,
        notes: [
            'Only appears in sandbox mode',
            'It only consumes 1 life when leaked',
            'Appears from the exit of the track and moves to the beginning',
        ],
    },
    'm.o.a.b': {
        name: 'm.o.a.b',
        rbe: 616,
        children: [{name: 'ceramic', count: 4}],
        speed: 1,
        notes: ['Massive Ornary Air Blimp', 'Immune to freezing and cannot be glued'],
    },
    'b.f.b': {
        name: 'b.f.b',
        rbe: 3164,
        children: [{name: 'm.o.a.b', count: 4}],
        speed: 0.25,
        notes: ['Brutal Floating Behemoth'],
    },
    'z.o.m.g': {
        name: 'z.o.m.g',
        rbe: 16656,
        children: [{name: 'b.f.b', count: 4}],
        speed: 0.18,
        notes: [
            'Zeppelin Of Mighty Gargantuaness',
            'Immune to many abilities, such as Monkey Pirates, Glue Striker, Absolute Zero',
        ],
    },
    'd.d.t': {
        name: 'd.d.t',
        rbe: 816,
        children: [{name: 'ceramic', mods: ['camo', 'regrowth'], count: 4}],
        speed: 2.64,
        notes: [
            'Dark Dirigible Titan',
            'It has the properties of a zebra bloon, camo bloon, lead bloon, and a MOAB-Class Bloon',
        ],
    },
    'b.a.d': {
        name: 'b.a.d',
        rbe: 55760,
        children: [
            {name: 'z.o.m.g', count: 2},
            {name: 'd.d.t', count: 3},
        ],
        speed: 0.18,
        notes: ['Big Airship of Doom', 'Resistant to most abilities and attacks, such as glue'],
    },

    'bloonarius the inflator': {
        name: 'bloonarius the inflator',
        type: TYPE.boss,
        children: [],
        notes: [
            'Slowest Bloon in BTD series,',
            'Strongest Non-Infinite Scaling Boss Bloon in BTD series',
            'Immunities to many abilities',
            'Immune to all types of slowing (SSB, etc.)',
            'Immune to all knockback attacks (MOAB Press, MOAB Shove, etc.)',
        ],
    },
    'vortex: deadly master of air': {
        name: 'vortex: deadly master of air',
        type: TYPE.boss,
        children: [],
        notes: [
            'A Fast Boss Bloon which sends out a shockwave that stuns all towers near it, including Paragons, when it reaches one of Its Skull’s, It retreats with a Shield Protecting it from all Projectiles.',
        ],
    },
    'gravelord lych': {
        name: 'gravelord lych',
        type: TYPE.boss,
        children: [],
        notes: [
            'Capable of sapping applied and/or temporary buffs, healing itself and stunning affected towers',
            'Can resurrect Lych-Soul, a super fast version of Lych that slowly drains lives.',
            'Can summon Resurrected Blimps from recently popped MOAB-class bloons, giving them much more HP and speed but produces no children.',
            'Can become ethereal, becoming invincible until all offspring on screen are popped',
        ],
    },
    'lych-soul': {
        name: 'lych-soul',
        type: TYPE.boss,
        children: [],
        notes: ['A mini Lych, a super fast version of Lych that slowly drains lives.'],
    },
    'dreadbloon: armored behemoth': {
        name: 'dreadbloon: armored behemoth',
        type: TYPE.boss,
        children: [],
        speed: 0.15,
        notes: [
            'It has properties of a lead Bloon',
            'It shields itself with yellow rocks at 100%, 75%, 50%, and 25% health',
        ],
    },
    'blastapopoulos: demon of the core': {
        name: 'blastapopoulos: demon of the core',
        type: TYPE.boss,
        children: [],
        speed: 0.18,
        notes: [
            'This boss has the ability to throw a fireball at the most expensive tower on screen which stuns the targeted tower.',
            'It shields itself with yellow rocks at 100%, 75%, 50%, and 25% health',
        ],
    },
};
