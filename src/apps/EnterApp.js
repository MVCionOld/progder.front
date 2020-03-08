import React, {Component} from 'react';
import {SignupForm} from "../components/forms/SignupForm";
import {LoginForm} from "../components/forms/LoginForm";


export class EnterApp extends Component {

    render() {
        const role = this.props.match.params.role;
        const isSigningUp = this.props.match.params.action === 'signup';
        return (
            <div className="EnterApp">
                {isSigningUp
                    ? <SignupForm role={role}/>
                    : <LoginForm role={role}/>
                }
            </div>
        );
    }
}
