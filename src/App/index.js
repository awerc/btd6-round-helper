import React, {useState, useCallback, useMemo} from 'react';
import {Card, Select, Statistic, Tooltip, Row, Col, Input, Button} from 'antd';
import {PlusOutlined, MinusOutlined, QuestionCircleOutlined} from '@ant-design/icons';

import Money from '../Money/index';
import Bloon from '../Bloon/index';
import {getRound} from './utils';

import {ROUNDS, ALTERNATE_ROUNDS} from '../constants';
import DangerIcon from '../DangerIcon';

const {Option} = Select;

const MODES = {
    normal: 'normal',
    alternate: 'alternate',
};

const ROUNDS_BY_MODE = {
    [MODES.normal]: ROUNDS,
    [MODES.alternate]: ALTERNATE_ROUNDS,
};

const App = () => {
    const [round, setRound] = useState('1');
    const setRoundSafe = useCallback(value => Number(value) > 0 && setRound(value));
    const toggleNextRound = useCallback(() => setRoundSafe(String(+round + 1)), [round]);
    const togglePrevRound = useCallback(() => setRoundSafe(String(+round - 1)), [round]);

    const [mode, setMode] = useState(MODES.normal);
    const {red_eqv, money, bloons, danger} = useMemo(() => getRound(ROUNDS_BY_MODE[mode])(String(round)) || {}, [
        mode,
        round,
    ]);

    return (
        <Card
            style={{
                width: 'min(calc(100% - 100px), 400px)',
                margin: 50,
                boxShadow:
                    '0 1px 2px -2px rgba(0, 0, 0, 0.16), ' +
                    '0 3px 6px 0 rgba(0, 0, 0, 0.12), ' +
                    '0 5px 12px 4px rgba(0, 0, 0, 0.09)',
                borderColor: 'transparent',
            }}
            title={
                <Row gutter={6} align="middle">
                    <Col span={16}>
                        <Input
                            value={round}
                            onChange={e => setRoundSafe(e.target.value)}
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
                                red_eqv && (
                                    <Tooltip placement="right" title={`red eqv: ${red_eqv}`}>
                                        <QuestionCircleOutlined style={{color: '#555'}} />
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

                <Statistic
                    title="Bloons"
                    value={
                        <Row gutter={[16, 16]} align="middle">
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
                    }
                    formatter={value => value}
                />
            </Col>
        </Card>
    );
};

export default App;
