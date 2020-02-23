import React from 'react';
import './App.css';

import {RecruiterWorkspace} from "./components/RecruiterWorkspace";
import {CircularMenu} from "./components/CircularMenu";
import {LoginForm} from "./components/LoginForm";
import {RoleSelection} from "./components/RoleSelection";
import {SignupForm} from "./components/SignupForm";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/*<RecruiterWorkspace/>*/}
                {/*<CircularMenu/>*/}
                <RoleSelection/>
            </div>
        );
    }
}

export default App;
