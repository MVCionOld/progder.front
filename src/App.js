import React from 'react';
import './App.css';
import {LoginForm} from "./components/LoginForm";
import {SignupForm} from "./components/SignupForm";


export class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/*<ProgderBody />*/}
                <LoginForm role={"recruiter"}/>
            </div>
        );
    }
}

export default App;
