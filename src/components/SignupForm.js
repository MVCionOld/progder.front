import React, {Component} from 'react';
import "./LoginSignupForm.css";
import {InputBox} from "./InputBox";
import {RoleSelection} from "./RoleSelection";


export class SignupForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.role.toLowerCase() === 'recruiter') {
            return (
                <div className="box">
                    <h2>Signup as {this.props.role.toLowerCase()}</h2>
                    <form>
                        <InputBox type={"text"} name={""} required={""} label={"Username"}/>
                        <InputBox type={"text"} name={""} required={""} label={"Company"}/>
                        <InputBox type={"email"} name={""} required={""} label={"Email"}/>
                        <InputBox type={"password"} name={""} required={""} label={"Password"}/>
                        <input type="submit" name="" value="Submit"/>
                    </form>
                </div>
            );
        } else if (this.props.role.toLowerCase() === 'candidate') {
            return (
                <div className="box">
                    <h2>Signup as {this.props.role.toLowerCase()}</h2>
                    <form>
                        <InputBox type={"text"} name={""} required={""} label={"Username"}/>
                        <InputBox type={"email"} name={""} required={""} label={"Email"}/>
                        <InputBox type={"password"} name={""} required={""} label={"Password"}/>
                        <input type="submit" name="" value="Submit"/>
                    </form>
                </div>
            );
        } else {
            return <RoleSelection/>;
        }
    }
}