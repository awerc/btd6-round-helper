import React, {useState} from 'react';
import {Collapse, Col, Row} from 'antd';
import {ThemeSwitcherProvider} from 'react-css-theme-switcher';

import {MODES, THEMES} from './constants';
import useLocalStorage from './useLocalStorage';

import Widget from './Widget';
import RoundsTable from './RoundsTable';
import RampingTable from './RampingTable';
import BloonsHierarchy from './BloonsHierarchy';
import ThemeSwitcher from './ThemeSwitcher';

const {Panel} = Collapse;

const App = () => {
    const [isDarkMode] = useLocalStorage('darkMode', false);

    return (
        <ThemeSwitcherProvider themeMap={THEMES} defaultTheme={isDarkMode ? 'dark' : 'light'}>
            <Col>
                <Row justify="end" style={{padding: '20px 50px'}}>
                    <ThemeSwitcher />
                </Row>
                <div className="app fade-in">
                    <Widget />
                    <Collapse defaultActiveKey="0">
                        <Panel header="Bloons hierarchy" key="1">
                            <BloonsHierarchy />
                        </Panel>
                        <Panel header="Ramping table" key="2">
                            <div className="collapse-insider" style={{margin: '-16px'}}>
                                <RampingTable />
                            </div>
                        </Panel>
                        <Panel header="Rounds table" key="3">
                            <div className="collapse-insider" style={{margin: '-16px'}}>
                                <RoundsTable />
                            </div>
                        </Panel>
                    </Collapse>
                </div>
            </Col>{' '}
        </ThemeSwitcherProvider>
    );
};

export default App;
