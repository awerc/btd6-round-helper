import React from 'react';
import {Row, Col, Tooltip} from 'antd';

import Bloon from '../Bloon';
import DangerIcon from '../Icons/DangerIcon';

const BloonsList = ({bloons, danger, wrap = true}) => (
    <Row wrap={wrap} gutter={16} align="middle">
        {danger && (
            <Col style={{display: 'flex'}}>
                <Tooltip placement="right" title={danger}>
                    <DangerIcon style={{fontSize: '35px'}} />
                </Tooltip>
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
