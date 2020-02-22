import React from 'react';
import './App.css';
import {HRMain} from "./components/HRMain";
import {CircularMenu} from "./components/CircularMenu";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <HRMain/>
                <CircularMenu/>
            </div>
        );
    }
}

export default App;
