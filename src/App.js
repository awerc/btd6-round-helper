import React from 'react';
import {Collapse, Col, Row} from 'antd';

import useLocalStorage from './useLocalStorage';

import Widget from './Widget';
import RoundsTable from './RoundsTable';
import RampingTable from './RampingTable';
import BloonsHierarchy from './BloonsHierarchy';
import ThemeSwitcher from './ThemeSwitcher';
import Keyboard from './Keyboard';
import {ConfigProvider, theme} from 'antd';

import {Global, css} from '@emotion/react';
const {Panel} = Collapse;

const App = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false);

    return (
        <>
            <Global
                styles={css`
                    body {
                        background: ${isDarkMode ? '#363a3d' : '#f2f2f2'};
                    }
                `}
            />
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? theme.darkAlgorithm : theme.lightAlgorithm,
                }}
            >
                <Col>
                    <Row justify="end" style={{padding: '20px 50px'}}>
                        <ThemeSwitcher isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
                        <Collapse defaultActiveKey="0" className="keyboard-shortcuts">
                            <Panel header="Keyboard shortcuts" key="1">
                                <Keyboard />
                            </Panel>
                        </Collapse>
                    </div>
                </Col>
            </ConfigProvider>
        </>
    );
};

export default App;
