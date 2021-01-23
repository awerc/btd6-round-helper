import React, {useState, useCallback, useMemo} from 'react';
import {Card, Select, Statistic, Tooltip, Row, Col, Input, Button} from 'antd';
import {PlusOutlined, MinusOutlined, QuestionCircleOutlined} from '@ant-design/icons';

import Money from '../Money';
import BloonsList from '../BloonsList';
import {getRound, prettifyNumber} from '../utils';

import {MODES, ROUNDS_BY_MODE} from '../constants';

const {Option} = Select;

const Widget = ({mode, setMode}) => {
    const [round, setRound] = useState('1');
    const setRoundSafe = useCallback(value => Number(value) > 0 && setRound(value), [setRound]);
    const setRoundSemiSafe = useCallback(value => setRound(value.replace(/[^\d]/, '')), [setRound]);
    const toggleNextRound = useCallback(() => setRoundSafe(String(+round + 1)), [round, setRoundSafe]);
    const togglePrevRound = useCallback(() => setRoundSafe(String(+round - 1)), [round, setRoundSafe]);

    const {rbe, money, bloons, danger} = useMemo(() => getRound(ROUNDS_BY_MODE[mode])(String(round)) || {}, [
        mode,
        round,
    ]);

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
            <Col gutter={16}>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Statistic
                            title="Round"
                            value={round}
                            suffix={
                                rbe && (
                                    <Tooltip placement="right" title={`RBE: ${prettifyNumber(rbe)}`}>
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
            </Col>
        </Card>
    );
};

export default Widget;
