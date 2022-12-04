import {ROUNDS} from './rounds';
import {ALTERNATE_ROUNDS} from './alternateRounds';
import {TYPE, LAYERS} from './layers';

export {TYPE, ROUNDS, ALTERNATE_ROUNDS, LAYERS};

export const MODES = {
    normal: 'normal',
    alternate: 'alternate',
};

export const ROUNDS_BY_MODE = {
    [MODES.normal]: ROUNDS,
    [MODES.alternate]: ALTERNATE_ROUNDS,
};
