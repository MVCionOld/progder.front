import React from 'react';
import './App.css';

import {RecruiterWorkspace} from "./components/RecruiterWorkspace";
import {CircularMenu} from "./components/CircularMenu";
import {Login} from "./components/Login";
import {RoleSelection} from "./components/RoleSelection";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/*<RecruiterWorkspace/>*/}
                {/*<CircularMenu/>*/}
                <Login/>
                {/*<RoleSelection/>*/}
            </div>
        );
    }
}

export default App;
