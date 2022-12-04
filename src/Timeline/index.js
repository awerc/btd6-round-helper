import {Col, Row, Tooltip} from 'antd';
import React from 'react';

import Bloon from '../Bloon';

import {LAYERS, MODS_STYLES} from '../constants';

const Timeline = ({time, timeline}) => {
    return timeline.map(({name, mods, count, start, end}, index) => (
        <Row key={`${name}_${mods}_${index}`} gutter={[16, 16]}>
            <Col>
                <Row style={{width: 30}} justify="center">
                    <Bloon data={{name, count, mods}} size={30} />
                </Row>
            </Col>
            <Col style={{position: 'relative', margin: '0 8px'}} flex={1}>
                <Tooltip placement="top" title={`${start}s - ${end}s`}>
                    <Row
                        style={{
                            left: `${(start / time) * 100}%`,
                            right: `${100 - (end / time) * 100}%`,
                            borderRadius: 10,
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(0, -50%)',
                            background: name,
                            border: '2px hidden transparent',
                            padding: 8,
                            ...LAYERS[name].style,
                            ...mods?.reduce((acc, mod) => ({...acc, ...MODS_STYLES[mod]}), {}),
                        }}
                    />
                </Tooltip>
            </Col>
        </Row>
    ));
};

export default Timeline;
