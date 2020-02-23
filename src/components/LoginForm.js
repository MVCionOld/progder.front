import React, {Component} from 'react';
import "./LoginSignupForm.css";
import {InputBox} from "./InputBox";


export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameValue: '',
            passwordValue: '',
            formData: [
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Username",
                    onChange: (event) => {
                        this.setState({
                            usernameValue: event.target.value
                        })
                    }
                },
                {
                    type: "password",
                    name: "",
                    required: "",
                    label: "Password",
                    onChange: (event) => {
                        this.setState({
                            passwordValue: event.target.value
                        })
                    }
                }
            ]
        };
    }

    render() {
        return (
            <div className="box">
                <h2>Login as {this.props.role.toLowerCase()}</h2>
                <form>
                    {this.state.formData.map((inputBoxProps => {
                        return <InputBox
                            type={inputBoxProps.type}
                            name={inputBoxProps.name}
                            label={inputBoxProps.label}
                            required={inputBoxProps.required}
                            onChange={inputBoxProps.onChange}
                        />
                    }))}
                    <input type="submit" name="" value="Submit"/>
                </form>
            </div>
        );
    }
}