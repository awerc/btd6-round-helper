import React, {useCallback} from 'react';
import {Switch, Row, Col} from 'antd';

import ThemeIcon from '../Icons/ThemeIcon';

const ThemeSwitcher = ({isDarkMode, setIsDarkMode}) => {
    const switchTheme = useCallback(
        isChecked => {
            setIsDarkMode(isChecked);
        },
        [setIsDarkMode],
    );

    const toggleTheme = useCallback(() => {
        const isChecked = !isDarkMode;
        setIsDarkMode(isChecked);
    }, [isDarkMode, setIsDarkMode]);

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
