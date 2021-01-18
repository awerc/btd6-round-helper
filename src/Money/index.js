import React from 'react';

import './style.scss';
import branch from '../branch';
import moneyIcon from '../bloons/money.png';
import Tooltip from '../Tooltip';

const Money = ({data}) => {
    const {pop, total, cumulative} = data || {};

    return (
        <div className="money">
            <Tooltip
                text={
                    <div>
                        {pop && <div>pop: {pop}</div>}
                        {pop && total && <div>finish: {total - pop}</div>}
                        {total && <div>total: {total}</div>}
                        {cumulative && <div>cumulative: {cumulative}</div>}
                    </div>
                }
            >
                <img className="icon" src={moneyIcon} alt="" />
            </Tooltip>
        </div>
    );
};

export default branch(({data}) => !!data, Money);
