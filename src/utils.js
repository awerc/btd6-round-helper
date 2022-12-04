import {LAYERS, ROUNDS_BY_MODE} from './constants';
import SpeedIcon from './Icons/SpeedIcon';

export const getTooltip = ({name, mods = []}) => {
    const {rbe, speed, notes = []} = LAYERS[name];

    return (
        <div>
            {name && (
                <div
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        whiteSpace: 'pre-wrap',
                        minWidth: 100,
                    }}
                >
                    {capitalize([name, ...mods].join(' ').replace(': ', ':\n'))}
                </div>
            )}
            {rbe && <div>RBE: {prettifyNumber(rbe)}</div>}
            {speed && (
                <div>
                    <SpeedIcon style={{fontSize: '20px', marginRight: 5}} />
                    {speed}
                </div>
            )}
            {notes.length > 0 && notes.map(note => <div key={note}>• {note}</div>)}
        </div>
    );
};

export const getRound = ({round, mode}) =>
    ROUNDS_BY_MODE[mode].find(info => {
        const roundRange = info.round.split('-');
        const min = Number(roundRange[0]);
        const max = Number(roundRange[roundRange.length - 1]);

        return Number(round) >= min && Number(round) <= max;
    });

export const capitalize = str => str.replace(/\b\w/g, l => l.toUpperCase());

export const prettifyNumber = num =>
    (typeof num === 'string' ? num : num.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
