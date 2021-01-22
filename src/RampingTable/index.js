import React from 'react';
import {Table} from 'antd';

import {getRound} from '../utils';

import {ROUNDS_BY_MODE} from '../constants';
import BloonsList from '../BloonsList';

const COLUMNS = [
    {
        title: 'Round',
        dataIndex: 'round',
        key: 'round',
    },
    {
        title: 'Bloon Health',
        dataIndex: 'health',
        key: 'health',
    },
    {
        title: 'Speed',
        dataIndex: 'speed',
        key: 'speed',
    },
];

const DATA_SOURCE = [
    {
        key: 1,
        round: '81-100',
        health: '1x health +2% per round',
        speed: '1x speed + 2% per round',
    },
    {
        key: 2,
        round: '101-124',
        health: '1.4x health +5% per round',
        speed: '1.4x speed + 5% per round',
    },
    {
        key: 3,
        round: '125-151',
        health: '2.6x health +20% per round',
        speed: '2.6x speed +5% per round',
    },
    {
        key: 4,
        round: '152+',
        health: '8x health +50% per round',
        speed: '4x speed + 5% per round',
    },
];

const RampingTable = () => {
    return (
        <Table
            style={{maxWidth: 'min(500px, 100%)'}}
            size="small"
            pagination={false}
            columns={COLUMNS}
            dataSource={DATA_SOURCE}
        />
    );
};

export default RampingTable;
