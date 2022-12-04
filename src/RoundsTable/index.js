import React, {useState, useCallback} from 'react';
import {Col, Row, Switch, Table, Tag} from 'antd';

import {getRound} from '../utils';
import {MODES} from '../constants';
import BloonsList from '../BloonsList';

const {CheckableTag} = Tag;

const RoundsTable = () => {
    const [mode, setMode] = useState(MODES.normal);
    const toggleMode = useCallback(
        () => setMode(mode === MODES.normal ? MODES.alternate : MODES.normal),
        [mode, setMode],
    );

    const dataSource = new Array(140).fill(undefined).map((_, index) => ({
        key: index + 1,
        round: index + 1,
        bloons: getRound({round: index + 1, mode}) || {},
    }));

    const COLUMNS = [
        {
            title: '',
            dataIndex: 'round',
            key: 'round',
            width: '70px',
        },
        {
            title: (
                <Row justify="space-between">
                    Bloons
                    <Row gutter={8}>
                        <Col>
                            <CheckableTag checked={mode === MODES.normal} onChange={() => setMode(MODES.normal)}>
                                normal
                            </CheckableTag>
                        </Col>
                        <Col>
                            <Switch checked={mode === MODES.alternate} onChange={toggleMode} />
                        </Col>
                        <Col>
                            <CheckableTag checked={mode === MODES.alternate} onChange={() => setMode(MODES.alternate)}>
                                alternate
                            </CheckableTag>
                        </Col>
                    </Row>
                </Row>
            ),
            dataIndex: 'bloons',
            key: 'bloons',
            render: ({rbe, money, bloons, danger}) => <BloonsList {...{bloons, danger, wrap: false}} />,
        },
    ];

    return (
        <Table
            scroll={{x: true}}
            size="small"
            sticky
            pagination={{position: ['bottomLeft']}}
            columns={COLUMNS}
            dataSource={dataSource}
        />
    );
};

export default RoundsTable;
