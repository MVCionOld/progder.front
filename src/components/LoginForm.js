import React, {Component} from 'react';
import "./LoginSignupForm.css";
import {InputBox} from "./InputBox";


export class LoginForm extends Component {

    render() {
        return (
            <div className="box">
                <h2>Login as {this.props.role.toLowerCase()}</h2>
                <form>
                    <InputBox type={"text"} name={""} required={""} label={"Username"}/>
                    <InputBox type={"password"} name={""} required={""} label={"Password"}/>
                    <input type="submit" name="" value="Submit"/>
                </form>
            </div>
        );
    }
}