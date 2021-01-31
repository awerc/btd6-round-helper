import Icon from '@ant-design/icons';

const ArrowsSvg = () => (
    <svg width="1em" height="1em" viewBox="0 -104 516 512">
        <linearGradient id="a" x1="0" x2="512" y1="151.98" y2="151.98" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#87f1fc" />
            <stop offset=".26" stop-color="#7fd4fb" />
            <stop offset=".53" stop-color="#78bcfb" />
            <stop offset=".78" stop-color="#74aefa" />
            <stop offset="1" stop-color="#73a9fa" />
        </linearGradient>
        <path
            fill="url(#a)"
            d="M143.88 303.96a40 40 0 01-28.29-11.73l-97.96-97.75C6.26 183.13 0 168.04 0 151.98s6.26-31.15 17.63-42.5l97.96-97.75a40 40 0 0143.7-8.65 39.93 39.93 0 0124.7 36.98v21.92a20 20 0 01-40 0V40.06v-.01l-.1-.05-.05.05-97.96 97.75A19.9 19.9 0 0040 151.98a19.9 19.9 0 005.88 14.18l97.96 97.76.05.04.1-.04V171.98c0-22.05 17.95-40 40-40H328V40.06c0-16.24 9.7-30.75 24.71-36.98a39.99 39.99 0 0143.7 8.65l97.96 97.76a59.62 59.62 0 0117.63 42.5 59.63 59.63 0 01-17.63 42.49l-97.96 97.75a40 40 0 01-43.7 8.65 39.92 39.92 0 01-24.7-36.97v-21.93a20 20 0 0140 0v21.94l.1.04.05-.04 97.96-97.76c3.79-3.78 5.88-8.82 5.88-14.18s-2.09-10.39-5.88-14.18l-97.96-97.75-.05-.05-.1.05v91.93c0 22.06-17.95 40-40 40H184v91.93c0 16.23-9.7 30.75-24.71 36.97a40.19 40.19 0 01-15.42 3.08zm0 0"
            stroke="black"
            stroke-width="5"
        />
    </svg>
);

const ArrowsIcon = props => <Icon component={ArrowsSvg} {...props} />;

export default ArrowsIcon;
