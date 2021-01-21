import React, {useState} from 'react';

import {MODES} from './constants';
import Widget from './Widget';
import Table from './Table';

const App = () => {
    const [mode, setMode] = useState(MODES.normal);

    return (
        <div className="app">
            <Widget {...{mode, setMode}} />
            <Table mode={mode} />
        </div>
    );
};

export default App;
