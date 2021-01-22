import React from 'react';
import {Tooltip, Statistic} from 'antd';

import branch from '../branch';
import moneyIcon from '../bloons/money.png';

const Money = ({data}) => {
    const {pop, total, cumulative} = data || {};

    return (
        <Statistic
            title="Money"
            value={total}
            suffix={
                <Tooltip
                    placement="right"
                    title={
                        <div>
                            {pop && <div>pop: {pop}</div>}
                            {pop && total && <div>finish: {total - pop}</div>}
                            {cumulative && <div>cumulative: {cumulative}</div>}
                        </div>
                    }
                >
                    <img style={{width: '40px'}} src={moneyIcon} alt="" />
                </Tooltip>
            }
        />
    );
};

export default branch(({data}) => !!data, Money);
