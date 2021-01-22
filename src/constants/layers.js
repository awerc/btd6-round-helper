export const LAYERS = [
    {
        name: 'red',
        rbe: 1,
        children: [],
        speed: 1,
    },
    {
        name: 'blue',
        rbe: 2,
        children: [{name: 'red', count: 1}],
        speed: 1.4,
    },
    {
        name: 'green',
        rbe: 3,
        children: [{name: 'blue', count: 1}],
        speed: 1.8,
    },
    {
        name: 'yellow',
        rbe: 4,
        children: [{name: 'green', count: 1}],
        speed: 3.2,
    },
    {
        name: 'pink',
        rbe: 5,
        children: [{name: 'yellow', count: 1}],
        speed: 3.5,
    },
    {
        name: 'black',
        rbe: 11,
        children: [{name: 'pink', count: 2}],
        speed: 1.8,
        notes: ['Immune to explosions'],
    },
    {
        name: 'white',
        rbe: 11,
        children: [{name: 'pink', count: 2}],
        speed: 2,
        notes: ['Immune to being frozen'],
    },
    {
        name: 'purple',
        rbe: 11,
        children: [{name: 'pink', count: 2}],
        speed: 3,
        notes: ['Immune to all energy, fire and plasma attacks'],
    },
    {
        name: 'lead',
        rbe: 23,
        children: [{name: 'black', count: 2}],
        speed: 3,
        notes: ['Immune to any sharp stuff', 'Too heavy to be picked up by Tempest Tornadoes or Whirlwinds'],
    },
    {
        name: 'zebra',
        rbe: 23,
        children: [
            {name: 'black', count: 1},
            {name: 'white', count: 1},
        ],
        speed: 1.8,
        notes: ['Immune to explosions and freezing'],
    },
    {
        name: 'rainbow',
        rbe: 47,
        children: [
            {name: 'black', count: 2},
            {name: 'white', count: 2},
        ],
        speed: 2.2,
    },
    {
        name: 'ceramic',
        rbe: 104,
        children: [{name: 'rainbow', count: 2}],
        speed: 2.5,
        notes: ['Takes 10 hits to break it open (38 in freeplay)', "It won't be slowed down by Glue Gunners"],
    },
    {
        name: 'golden',
        rbe: 300,
        children: [],
        speed: 3.5,
        notes: [
            'It has camo and lead properties',
            'It gives Monkey Money and Special Agents instead of cash',
            'Appears from the exit of the track and moves to the beginning',
        ],
    },
    {
        name: 'ghost',
        rbe: 10000000,
        children: [],
        speed: 1,
        notes: [
            'only appears in sandbox mode',
            'It only consumes 1 life when leaked',
            'Appears from the exit of the track and moves to the beginning',
        ],
    },
    {
        name: 'm.o.a.b',
        rbe: 616,
        children: [{name: 'ceramic', count: 4}],
        speed: 1,
        notes: ['Massive Ornary Air Blimp', 'immune to freezing and cannot be glued'],
    },
    {
        name: 'b.f.b',
        rbe: 3164,
        children: [{name: 'm.o.a.b', count: 4}],
        speed: 0.25,
        notes: ['Brutal Floating Behemoth'],
    },
    {
        name: 'z.o.m.g',
        rbe: 16656,
        children: [{name: 'b.f.b', count: 4}],
        speed: 0.18,
        notes: [
            'Zeppelin Of Mighty Gargantuaness',
            'Immune to many abilities, such as Monkey Pirates, Glue Striker, Absolute Zero',
        ],
    },
    {
        name: 'b.a.d',
        rbe: 55760,
        children: [
            {name: 'z.o.m.g', count: 2},
            {name: 'd.d.t', count: 3},
        ],
        speed: 0.18,
        notes: ['Big Airship of Doom', 'Resistant to most abilities and attacks, such as glue'],
    },
    {
        name: 'd.d.t',
        rbe: 816,
        children: [
            {name: 'ceramic', mods: ['camo', 'regrowth'], count: 4},
            {name: 'd.d.t', count: 3},
        ],
        speed: 2.64,
        notes: [
            'Dark Dirigible Titan',
            'It has the properties of a zebra bloon, camo bloon, lead bloon, and a MOAB-Class Bloon',
        ],
    },
    {
        name: 'd.d.t',
        rbe: 816,
        children: [
            {name: 'ceramic', mods: ['camo', 'regrowth'], count: 4},
            {name: 'd.d.t', count: 3},
        ],
        speed: 2.64,
        notes: [
            'Dark Dirigible Titan',
            'It has the properties of a zebra bloon, camo bloon, lead bloon, and a MOAB-Class Bloon',
        ],
    },
    {
        name: 'bloonarius the inflator',
        children: [],
        speed: 0.1,
        notes: [
            ' When its health reaches 3/4, 1/2 and 1/4, it will spawn a random bloon - this ranges from lead to Z.O.M.G.',
        ],
    },
    {
        name: 'vortex: deadly master of air',
        children: [],
        speed: 0.2,
        notes: [
            'When its health reaches 3/4, 1/2 and 1/4, it leaves a trail of smoke that slows the attack speed of nearby towers for a short time',
        ],
    },
    {
        name: 'dreadbloon: armored behemoth',
        children: [],
        speed: 0.15,
        notes: [
            'It has properties of a lead Bloon',
            'It shields itself with yellow rocks at 100%, 75%, 50%, and 25% health',
        ],
    },
    {
        name: 'blastapopoulos: demon of the core',
        children: [],
        speed: 0.18,
        notes: [
            'This boss has the ability to throw a fireball at the most expensive tower on screen which stuns the targeted tower.',
            'It shields itself with yellow rocks at 100%, 75%, 50%, and 25% health',
        ],
    },
];
