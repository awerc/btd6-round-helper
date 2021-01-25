import React, {useMemo, useState, useCallback} from 'react';
import {Button, Row, Tooltip} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';

import {ROUNDS_BY_MODE} from '../constants';
import BloonsList from '../BloonsList';

const NextDangerRound = ({currentRound, mode, setRound}) => {
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

    const {round, danger} = nextDanger;

    return (
        <>
            <Row align="middle" style={{fontSize: '16px'}}>
                Next danger round:{' '}
                <Button size="large" type="link" onClick={() => setRound(round)}>
                    {round}
                </Button>
                <Tooltip placement="right" title={danger}>
                    <QuestionCircleOutlined />
                </Tooltip>
                <Button size="large" type="link" onClick={toggle}>
                    {expanded ? 'hide' : 'show'}
                </Button>
            </Row>
            {expanded && <BloonsList {...nextDanger} danger={false} />}
        </>
    );
};

export default NextDangerRound;
