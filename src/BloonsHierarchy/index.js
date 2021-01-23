import React from 'react';

import {LAYERS} from '../constants';
import Bloon from '../Bloon';
import {capitalize, prettifyNumber} from '../utils';
import './style.scss';
import {Col, Row, Typography} from 'antd';
import SpeedIcon from '../Icons/SpeedIcon';

const {Title} = Typography;

// TODO: refactor

const getTooltip = ({mods = [], name, rbe, speed, notes = []} = {}) => (
    <div>
        {name && (
            <div
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    whiteSpace: 'pre-wrap',
                    minWidth: 100,
                }}
            >
                {capitalize([name, ...mods].join(' ').replace(': ', ':\n'))}
            </div>
        )}
        {rbe && <div>RBE: {prettifyNumber(rbe)}</div>}
        {speed && (
            <div>
                <SpeedIcon style={{fontSize: '20px', marginRight: 5}} />
                {speed}
            </div>
        )}
        {notes.length > 0 && notes.map(note => <div>• {note}</div>)}
    </div>
);

const BloonWithChildren = data => (
    <div className="bloon-with-children">
        <Bloon data={data} tooltip={getTooltip(data)} />
        {data?.children?.length > 0 && (
            <div className="children">
                {data?.children.map((props, index) => (
                    <BloonWithChildren key={index} {...{...props, ...LAYERS[props.name]}} />
                ))}
            </div>
        )}
    </div>
);

const SPECIAL_BLOONS = [
    'golden',
    'ghost',
    'bloonarius the inflator',
    'vortex: deadly master of air',
    'dreadbloon: armored behemoth',
    'blastapopoulos: demon of the core',
];

const RoundsTable = () => {
    return (
        <Col>
            <Row
                gutter={[0, 50]}
                style={{
                    overflow: 'auto hidden',
                    padding: '25px 0',
                }}
            >
                <BloonWithChildren {...LAYERS['b.a.d']} />
                <BloonWithChildren {...LAYERS['lead']} />
                <BloonWithChildren {...LAYERS['purple']} />
            </Row>
            <Title level={3}>Special event bloons</Title>
            <Row gutter={12}>
                {SPECIAL_BLOONS.map(name => (
                    <Col key={name}>
                        <BloonWithChildren {...LAYERS[name]} />
                    </Col>
                ))}
            </Row>
        </Col>
    );
};

export default RoundsTable;
