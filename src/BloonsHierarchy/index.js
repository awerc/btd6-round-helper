import React from 'react';

import {Col, Row, Typography} from 'antd';
import Bloon from '../Bloon';
import {LAYERS, TYPE} from '../constants';

import './style.scss';

const {Title} = Typography;

const BloonWithChildren = data => (
    <div className="bloon-with-children">
        <Bloon data={data} />
        {data?.children?.length > 0 && (
            <div className="children">
                {data?.children.map((props, index) => (
                    <BloonWithChildren key={index} {...{...props, ...LAYERS[props.name]}} />
                ))}
            </div>
        )}
    </div>
);

const SPECIAL_BLOONS = Object.values(LAYERS)
    .filter(x => x.type === TYPE.special)
    .map(x => x.name);
const BOSS_BLOONS = Object.values(LAYERS)
    .filter(x => x.type === TYPE.boss)
    .map(x => x.name);

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
            <Title level={3}>Special bloons</Title>
            <Row gutter={12}>
                {SPECIAL_BLOONS.map(name => (
                    <Col key={name}>
                        <BloonWithChildren {...LAYERS[name]} />
                    </Col>
                ))}
            </Row>
            <Title level={3}>Boss bloons</Title>
            <Row gutter={12}>
                {BOSS_BLOONS.map(name => (
                    <Col key={name}>
                        <BloonWithChildren {...LAYERS[name]} />
                    </Col>
                ))}
            </Row>
        </Col>
    );
};

export default RoundsTable;
