import React from 'react';
import {Row, Col} from 'antd';

import PathIcon from '../Icons/PathIcon';
import Key from './Key';
import './style.scss';

const KEYS = [
    [
        {mods: ['empty']},
        {letter: '1', mods: ['default'], tower: 'Red'},
        {letter: '2', mods: ['default'], tower: 'Blue'},
        {letter: '3', mods: ['default'], tower: 'Green'},
        {letter: '4', mods: ['default'], tower: 'Yellow'},
        {letter: '5', mods: ['default'], tower: 'Pink'},
        {letter: '6', mods: ['default'], tower: 'Black'},
        {letter: '7', mods: ['default'], tower: 'Purple'},
        {letter: '8', mods: ['default'], tower: 'White'},
        {letter: '9', mods: ['default'], tower: 'Lead'},
        {letter: '0', mods: ['default'], tower: 'Zebra'},
        {letter: '-', mods: ['default'], tower: 'Rainbow'},
        {letter: '=', mods: ['default'], tower: 'Ceramic'},
        {letter: 'sell', mods: ['tab', 'service']},
    ],
    [
        {
            letter: 'target',
            mods: ['tab', 'service', 'small-text'],
            title: 'change targeting',
            // render: () => <ArrowsIcon style={{fontSize: 50}} />,
        },
        {letter: 'q', mods: ['primary'], tower: 'Dart Monkey'},
        {letter: 'w', mods: ['primary'], tower: 'Boomerang Monkey'},
        {letter: 'e', mods: ['primary'], tower: 'Bomb Shooter'},
        {letter: 'r', mods: ['primary'], tower: 'Tack Shooter'},
        {letter: 't', mods: ['primary'], tower: 'Ice Monkey'},
        {letter: 'y', mods: ['primary'], tower: 'Glue Gunner'},
        {letter: 'u', mods: ['hero'], tower: 'hero'},
        {mods: ['empty']},
        {letter: 'o', mods: ['default'], tower: 'm_o_a_b'},
        {letter: 'p', mods: ['default'], tower: 'b_f_b'},
        {letter: '[', mods: ['default'], tower: 'z_o_m_g'},
        {letter: ']', mods: ['default'], tower: 'd_d_t'},
        {letter: '\\', mods: ['default'], tower: 'b_a_d'},
    ],
    [
        {mods: ['empty']},
        {mods: ['empty']},
        {letter: 'a', mods: ['magic'], tower: 'Wizard Monkey'},
        {letter: 's', mods: ['magic'], tower: 'Super Monkey'},
        {letter: 'd', mods: ['magic'], tower: 'Ninja Monkey'},
        {letter: 'f', mods: ['magic'], tower: 'Alchemist'},
        {letter: 'g', mods: ['magic'], tower: 'Druid'},
        {letter: 'h', mods: ['support'], tower: 'Banana Farm'},
        {letter: 'j', mods: ['support'], tower: 'Spike Factory'},
        {letter: 'k', mods: ['support'], tower: 'Monkey Village'},
        {letter: 'l', mods: ['support'], tower: 'Engineer Monkey'},
    ],
    [
        {mods: ['tab', 'empty']},
        {mods: ['empty']},
        {letter: 'z', mods: ['military'], tower: 'Sniper Monkey'},
        {letter: 'x', mods: ['military'], tower: 'Monkey Sub'},
        {letter: 'c', mods: ['military'], tower: 'Monkey Buccaneer'},
        {letter: 'v', mods: ['military'], tower: 'Monkey Ace'},
        {letter: 'b', mods: ['military'], tower: 'Heli Pilot'},
        {letter: 'n', mods: ['military'], tower: 'Mortar Monkey'},
        {letter: 'm', mods: ['military'], tower: 'Dartling Gunner'},
        {
            letter: ',',
            mods: ['service'],
            title: 'upgrade path 1',
            render: () => <PathIcon path="top" style={{fontSize: 30}} />,
        },
        {
            letter: '.',
            mods: ['service'],
            title: 'upgrade path 2',
            render: () => <PathIcon path="middle" style={{fontSize: 30}} />,
        },
        {
            letter: '/',
            mods: ['service'],
            title: 'upgrade path 3',
            render: () => <PathIcon path="bottom" style={{fontSize: 30}} />,
        },
    ],
    [{mods: ['tab', 'empty']}, {mods: ['empty']}, {mods: ['empty']}, {mods: ['empty']}, {mods: ['space', 'service']}],
];

const Keyboard = () => (
    <Row
        style={{
            overflow: 'auto hidden',
        }}
        justify="center"
    >
        <Col>
            {KEYS.map(row => (
                <Row wrap={false} gutter={[8, 8]} className="row">
                    {row.map(key => (
                        <Col>
                            <Key {...key} />
                        </Col>
                    ))}
                </Row>
            ))}
        </Col>
    </Row>
);

export default Keyboard;
