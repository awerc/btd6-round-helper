import React from 'react';

import {LAYERS} from '../constants';
import Bloon from '../Bloon';
import {capitalize, prettifyNumber} from '../utils';
import './style.scss';
import {Col, Row, Typography} from 'antd';
import SpeedIcon from '../SpeedIcon';

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
            </Row>
            <Title level={3}>Special event bloons</Title>
            <Row gutter={12}>
                <Col>
                    <BloonWithChildren {...LAYERS['golden']} />
                </Col>
                <Col>
                    <BloonWithChildren {...LAYERS['ghost']} />
                </Col>
                <Col>
                    <BloonWithChildren {...LAYERS['bloonarius the inflator']} />
                </Col>
                <Col>
                    <BloonWithChildren {...LAYERS['vortex: deadly master of air']} />
                </Col>
                <Col>
                    <BloonWithChildren {...LAYERS['dreadbloon: armored behemoth']} />
                </Col>
                <Col>
                    <BloonWithChildren {...LAYERS['blastapopoulos: demon of the core']} />
                </Col>
            </Row>
        </Col>
    );
};

export default RoundsTable;
