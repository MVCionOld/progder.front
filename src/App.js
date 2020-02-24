import React from 'react';
import './App.css';
import {CandidateWorkspace} from "./components/CandidateWorkspace";
import {RecruiterWorkspace} from "./components/RecruiterWorkspace";
import {CircularMenu} from "./components/CircularMenu";
import {LoginForm} from "./components/LoginForm";
import {SignupForm} from "./components/SignupForm";
import {RoleSelection} from "./components/RoleSelection";
import {FlipCard} from "./components/FlipCard";


export class App extends React.Component {

    render() {
        return (
            <div className="App">
                {/*<RoleSelection />*/}
                <CandidateWorkspace/>
                {/*<RecruiterWorkspace />*/}
                <FlipCard/>
                <CircularMenu/>
            </div>
        );
    }
}

export default App;
