import React from 'react';
import {Row, Col} from 'antd';

import Bloon from '../Bloon';

import DangerIcon from '../DangerIcon';

const BloonsList = ({bloons, danger, wrap = true}) => (
    <Row wrap={wrap} gutter={16} align="middle">
        {danger && (
            <Col style={{display: 'flex'}}>
                <DangerIcon style={{fontSize: '35px'}} />
            </Col>
        )}
        {bloons?.map(bloon => (
            <Col key={[bloon?.name, bloon?.count, ...(bloon?.mods || [])].join(' ')}>
                <Bloon data={bloon} />
            </Col>
        ))}
    </Row>
);

export default BloonsList;
