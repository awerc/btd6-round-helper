import {MinusOutlined, PlusOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {Button, Card, Col, Collapse, Input, Row, Select, Space, Statistic, Tooltip} from 'antd';
import React, {useCallback, useMemo, useState} from 'react';

import BloonsList from '../BloonsList';
import Money from '../Money';
import {getRound, prettifyNumber} from '../utils';

import {MODES} from '../constants';
import NextDangerRound from '../NextDangerRound';
import Timeline from '../Timeline';

const {Option} = Select;

const Widget = () => {
    const [mode, setMode] = useState(MODES.normal);
    const [round, setRound] = useState('1');
    const setRoundSafe = useCallback(value => Number(value) > 0 && setRound(value), [setRound]);
    const setRoundSemiSafe = useCallback(value => setRound(value.replace(/[^\d]/, '')), [setRound]);
    const toggleNextRound = useCallback(() => setRoundSafe(String(+round + 1)), [round, setRoundSafe]);
    const togglePrevRound = useCallback(() => setRoundSafe(String(+round - 1)), [round, setRoundSafe]);

    const {rbe, money, bloons, danger, time, timeline} = useMemo(() => getRound({round, mode}) || {}, [mode, round]);

    return (
        <Card
            style={{
                boxShadow:
                    '0 1px 2px -2px rgba(0, 0, 0, 0.16), ' +
                    '0 3px 6px 0 rgba(0, 0, 0, 0.12), ' +
                    '0 5px 12px 4px rgba(0, 0, 0, 0.09)',
                borderColor: 'transparent',
            }}
            title={
                <Row gutter={[6, 6]} align="middle">
                    <Col span={16} style={{maxWidth: 'unset'}}>
                        <Input
                            style={{minWidth: '150px'}}
                            value={round}
                            onChange={e => setRoundSemiSafe(e.target.value)}
                            addonAfter={
                                <Select value={mode} onSelect={setMode}>
                                    <Option value={MODES.normal}>{MODES.normal}</Option>
                                    <Option value={MODES.alternate}>{MODES.alternate}</Option>
                                </Select>
                            }
                        />
                    </Col>
                    <Col flex="0">
                        <Button icon={<MinusOutlined />} onClick={togglePrevRound} />
                    </Col>
                    <Col flex="0">
                        <Button icon={<PlusOutlined />} onClick={toggleNextRound} />
                    </Col>
                </Row>
            }
        >
            <Space direction="vertical" style={{width: '100%'}}>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Statistic
                            title="Round"
                            value={round}
                            suffix={
                                rbe && (
                                    <Tooltip
                                        placement="right"
                                        title={
                                            <Space size={0} direction="vertical">
                                                <span>RBE: {prettifyNumber(rbe.current ?? '')}</span>
                                                {rbe.cumulative && (
                                                    <span>Cumulative RBE: {prettifyNumber(rbe.cumulative)}</span>
                                                )}
                                                {time && <span>Spawn time: {prettifyNumber(time)}s</span>}
                                            </Space>
                                        }
                                    >
                                        <QuestionCircleOutlined />
                                    </Tooltip>
                                )
                            }
                        />
                    </Col>
                    {money && (
                        <Col span={12}>
                            <Money data={money} />
                        </Col>
                    )}
                </Row>
                <Statistic title="Bloons" value={<BloonsList {...{bloons, danger}} />} formatter={value => value} />
                <NextDangerRound currentRound={round} mode={mode} setRound={setRound} />
                {timeline && (
                    <Collapse>
                        <Collapse.Panel header={`Timeline (${time}s)`}>
                            <Timeline time={time} timeline={timeline} />
                        </Collapse.Panel>
                    </Collapse>
                )}
            </Space>
        </Card>
    );
};

export default Widget;
