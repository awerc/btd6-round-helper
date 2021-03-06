import Icon from '@ant-design/icons';

const ThemeSvg = () => (
    <svg width="1em" height="1em" viewBox="0 0 512 512">
        <path fill="#363a3d" d="M256 0v512c141.4 0 256-114.6 256-256S397.4 0 256 0z" />
        <path fill="#f2f2f2" d="M256 0v512C114.6 512 0 397.4 0 256S114.6 0 256 0z" />
        <path
            fill="#f3c432"
            d="M103.4 256.02c0-84.28 68.33-152.6 152.6-152.6V31.65l-.03-.03-39.23 52.5-58.13-30.23-12.56 64.32-65.52-2.1 16.59 63.41-59.89 26.62 42.42 49.94-42.45 49.94 59.94 26.5-16.58 63.42 65.5-2.02 12.6 64.32 58.12-30.34L256 480.4v-71.78c-84.27 0-152.6-68.32-152.6-152.6z"
        />
        <path fill="#f3c432" d="M103.4 256.02c0 84.27 68.33 152.59 152.6 152.59V103.42c-84.27 0-152.6 68.32-152.6 152.6z" />
        <path
            fill="#ffd83b"
            d="M131.92 256.02c0 68.52 55.55 124.08 124.08 124.08V131.94c-68.53 0-124.08 55.55-124.08 124.08z"
        />
        <path
            fill="#fff"
            d="M380.08 256.02c0 68.52-55.55 124.08-124.08 124.08V131.94c68.53 0 124.08 55.55 124.08 124.08z"
        />
        <circle cx="287.09" cy="307.04" r="21.95" fill="#dde3e9" />
        <circle cx="302.67" cy="200.59" r="17.58" fill="#dde3e9" />
        <circle cx="344.5" cy="271.65" r="13.47" fill="#dde3e9" />

    </svg>
);

const ThemeIcon = props => <Icon component={ThemeSvg} {...props} />;

export default ThemeIcon;
