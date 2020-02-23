import React from 'react';
import './App.css';
import {CandidateWorkspace} from "./components/CandidateWorkspace";
import {RecruiterWorkspace} from "./components/RecruiterWorkspace";
import {CircularMenu} from "./components/CircularMenu";


export class App extends React.Component {

    render() {
        return (
            <div className="App">
                <RecruiterWorkspace/>
                <CircularMenu/>
            </div>
        );
    }
}

export default App;
