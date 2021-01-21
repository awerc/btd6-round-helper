import {ROUNDS} from './rounds';
import {ALTERNATE_ROUNDS} from './alternateRounds';

export {ROUNDS, ALTERNATE_ROUNDS};

export const MODES = {
    normal: 'normal',
    alternate: 'alternate',
};

export const ROUNDS_BY_MODE = {
    [MODES.normal]: ROUNDS,
    [MODES.alternate]: ALTERNATE_ROUNDS,
};
