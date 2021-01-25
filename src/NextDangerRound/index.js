import React, {useMemo, useState, useCallback} from 'react';
import {Button, Col, Row, Tooltip} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';

import {ROUNDS_BY_MODE} from '../constants';
import BloonsList from '../BloonsList';

const NextDangerRound = ({currentRound, mode}) => {
    const [expanded, toggleExpanded] = useState(false);
    const toggle = useCallback(() => toggleExpanded(!expanded), [expanded, toggleExpanded]);

    const nextDanger = useMemo(
        () =>
            ROUNDS_BY_MODE[mode].find(info => {
                const roundRange = info.round.split('-');
                const max = Number(roundRange[roundRange.length - 1]);

                return currentRound < max && info.danger;
            }),
        [mode, currentRound],
    );

    if (!nextDanger) return null;

    return (
        <>
            <Row gutter={8} align="middle" style={{fontSize: '16px'}}>
                <Col>Next danger round: {nextDanger.round}</Col>
                <Col>
                    <Tooltip placement="right" title={nextDanger.danger}>
                        <QuestionCircleOutlined />
                    </Tooltip>
                </Col>
                <Button size="large" type="link" onClick={toggle}>
                    {expanded ? 'hide' : 'show'}
                </Button>
            </Row>
            {expanded && <BloonsList {...nextDanger} danger={false} />}
        </>
    );
};

export default NextDangerRound;
