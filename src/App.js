import React from 'react';
import './App.css';

import {HRMain} from "./components/HRMain";
import {CircularMenu} from "./components/CircularMenu";
import {Login} from "./components/Login";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/*<HRMain/>*/}
                {/*<CircularMenu/>*/}
                <Login/>
            </div>
        );
    }
}

export default App;
