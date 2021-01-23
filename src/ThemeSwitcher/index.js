import React, {useCallback} from 'react';
import {Switch, Row, Col} from 'antd';
import {useThemeSwitcher} from 'react-css-theme-switcher';

import ThemeIcon from '../Icons/ThemeIcon';
import useLocalStorage from '../useLocalStorage';

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false);
    const {switcher, themes} = useThemeSwitcher();

    const switchTheme = useCallback(
        isChecked => {
            setIsDarkMode(isChecked);
            switcher({theme: isChecked ? themes.dark : themes.light});
        },
        [setIsDarkMode, switcher, themes],
    );

    const toggleTheme = useCallback(() => {
        const isChecked = !isDarkMode;
        setIsDarkMode(isChecked);
        switcher({theme: isChecked ? themes.dark : themes.light});
    }, [isDarkMode, setIsDarkMode, switcher, themes]);

    return (
        <Row gutter={8} align="middle">
            <Col>
                <Switch checked={isDarkMode} onChange={switchTheme} />
            </Col>
            <Col>
                <ThemeIcon onClick={toggleTheme} style={{fontSize: '35px'}} />
            </Col>
        </Row>
    );
};

export default ThemeSwitcher;
