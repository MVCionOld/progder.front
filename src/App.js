import React from 'react';
import './App.css';

import {HRMain} from "./components/HRMain";
import {CircularMenu} from "./components/CircularMenu";
import {Login} from "./components/Login";
import {RoleSelection} from "./components/RoleSelection";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/*<HRMain/>*/}
                {/*<CircularMenu/>*/}
                {/*<Login/>*/}
                <RoleSelection/>
            </div>
        );
    }
}

export default App;
