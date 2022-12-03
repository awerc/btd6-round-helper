import React from 'react';

import {Col, Row, Typography} from 'antd';
import Bloon from '../Bloon';
import {LAYERS} from '../constants';

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
