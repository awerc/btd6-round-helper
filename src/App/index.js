import React, {useState, useCallback, useMemo} from 'react';

import Money from '../Money/index';
import Bloon from '../Bloon/index';
import {getRound} from './utils';
import './style.scss';

import {ROUNDS, ALTERNATE_ROUNDS} from './constants';

import questionIcon from '../bloons/question.svg';
import dangerIcon from '../bloons/danger.svg';
import Tooltip from '../Tooltip/index';

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
    const setRoundSafe = useCallback(value => setRound(Number(value) ? String(value) : '1'));
    const toggleNextRound = useCallback(() => setRoundSafe(String(+round + 1)), [round]);
    const togglePrevRound = useCallback(() => setRoundSafe(String(+round - 1)), [round]);

    const [isAlternate, setAlternate] = useState(false);
    const toggleAlternate = useCallback(() => setAlternate(!isAlternate), [isAlternate]);
    const {red_eqv, money, bloons, danger} = useMemo(
        () => getRound(ROUNDS_BY_MODE[isAlternate ? MODES.alternate : MODES.normal])(String(round)) || {},
        [isAlternate, round],
    );

    return (
        <div className="app">
            <div className="round-info">
                <div className="fancy-text round">
                    Round: <br /> {round}
                </div>
                {red_eqv && (
                    <Tooltip text={`red eqv: ${red_eqv}`}>
                        <img className="info-icon" src={questionIcon} alt="" />
                    </Tooltip>
                )}
                <Money data={money} />
            </div>
            <div className="controls">
                <input className="round-input" value={round} type="text" onChange={e => setRoundSafe(e.target.value)} />
                <button onClick={togglePrevRound}>-</button>
                <button onClick={toggleNextRound}>+</button>
                <label className="alternate-checkbox">
                    <input type="checkbox" onClick={toggleAlternate} checked={isAlternate} />
                    alternate rounds
                </label>
            </div>
            <div className="bloons">
                {danger && <img className="danger-icon" src={dangerIcon} alt="" />}
                {bloons?.map(bloon => (
                    <Bloon key={[bloon?.name, bloon?.count, ...(bloon?.mods || [])].join(' ')} data={bloon} />
                ))}
            </div>
        </div>
    );
};

export default App;
