import React from 'react';
import {Table} from 'antd';

import {getRound} from '../utils';

import {ROUNDS_BY_MODE} from '../constants';
import BloonsList from '../BloonsList';

const COLUMNS = [
    {
        title: '',
        dataIndex: 'round',
        key: 'round',
        width: '70px',
    },
    {
        title: 'Bloons',
        dataIndex: 'bloons',
        key: 'bloons',
        render: ({rbe, money, bloons, danger}) => <BloonsList {...{bloons, danger, wrap: false}} />,
    },
];

const RoundsTable = ({mode}) => {
    const dataSource = new Array(100).fill(undefined).map((_, index) => ({
        key: index + 1,
        round: index + 1,
        bloons: getRound(ROUNDS_BY_MODE[mode])(String(index + 1)) || {},
    }));

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
