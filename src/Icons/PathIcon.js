import Icon from '@ant-design/icons';

const PathSvg = ({variant}) => (
    <svg width="1em" height="1em" viewBox="0 0 512 512">
        <path
            fill={variant === 'bottom' ? '#52c41a' : '#d9d9d9'}
            d="M315 512l89.81-121h-45.4a194.04 194.04 0 00-30.36-90l-44.23-13.5L165 301c52.8 0 96.63 39.18 103.93 90H225.2z"
        />
        <path
            fill={variant === 'top' ? '#52c41a' : '#d9d9d9'}
            d="M239.42 121h45.4L195 0l-89.82 121h43.75c-7.3 50.82-51.13 90-103.93 90l102.5 15.5 61.55-15.5a194.02 194.02 0 0030.37-90z"
        />
        <path fill={variant === 'middle' ? '#68df2e' : '#cccccc'} d="M398 347.2V301H0v-90h398v-46.21l114 91.2z" />
        <path fill={variant === 'middle' ? '#52c41a' : '#d9d9d9'} d="M398 347.2V301H0v-45h512z" />
    </svg>
);

const PathIcon = ({path, ...props}) => (
    <Icon component={svgProps => <PathSvg {...svgProps} variant={path} />} {...props} />
);

export default PathIcon;
