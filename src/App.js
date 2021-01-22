import React, {useState} from 'react';
import {Collapse} from 'antd';

import {MODES} from './constants';
import Widget from './Widget';
import Table from './Table';
import RampingTable from './RampingTable';

const {Panel} = Collapse;
const App = () => {
    const [mode, setMode] = useState(MODES.normal);

    return (
        <div className="app">
            <Widget {...{mode, setMode}} />
            <Collapse defaultActiveKey="2" style={{width: 'min(500px, 100%)'}} ghost>
                <Panel header="Ramping table" key="2">
                    <RampingTable />
                </Panel>
            </Collapse><Collapse defaultActiveKey="0" style={{width: 'min(500px, 100%)'}} ghost>
                <Panel header="Rounds table" key="1">
                    <Table mode={mode} />
                </Panel>
            </Collapse>

        </div>
    );
};

export default App;
