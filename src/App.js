import React, {useState} from 'react';
import {Col, Collapse} from 'antd';

import {MODES} from './constants';
import Widget from './Widget';
import RoundsTable from './RoundsTable';
import RampingTable from './RampingTable';
import BloonsHierarchy from './BloonsHierarchy';

const {Panel} = Collapse;

const App = () => {
    const [mode, setMode] = useState(MODES.normal);

    return (
        <Col className="app">
            <Widget {...{mode, setMode}} />
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
                        <RoundsTable mode={mode} />
                    </div>
                </Panel>
            </Collapse>
        </Col>
    );
};

export default App;
