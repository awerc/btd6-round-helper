import {ROUNDS} from './rounds';
import {ALTERNATE_ROUNDS} from './alternateRounds';
import {LAYERS} from './layers';

export {ROUNDS, ALTERNATE_ROUNDS, LAYERS};

export const MODES = {
    normal: 'normal',
    alternate: 'alternate',
};

export const ROUNDS_BY_MODE = {
    [MODES.normal]: ROUNDS,
    [MODES.alternate]: ALTERNATE_ROUNDS,
};

export const THEMES = {
    dark: `${process.env.PUBLIC_URL}/antd.dark.css`,
    light: `${process.env.PUBLIC_URL}/antd.default.css`,
};
