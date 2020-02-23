import React, {Component} from 'react';
import "./Login.css";


const InputBox = props => (
    <div className="inputbox">
        <input type={props.type} name={props.name} required={props.required}/>
        <label>{props.label}</label>
    </div>
);

export class Login extends Component {

    render() {
        return (
            <div className="box">
                <h2>Login</h2>
                <form>
                    <InputBox type={"text"} name={""} required={""} label={"Username"}/>
                    <InputBox type={"password"} name={""} required={""} label={"Password"}/>
                    <input type="submit" name="" value="Submit"/>
                </form>
            </div>
        );
    }
}