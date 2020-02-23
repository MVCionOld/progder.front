import React, {Component} from 'react';
import "./LoginSignupForm.css";
import {InputBox} from "./InputBox";
import {SubmitButton} from "./SubmitButton";


export class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameValue: '',
            nameValue: '',
            surnameValue: '',
            emailValue: '',
            companyNameValue: '',
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
                    type: "text",
                    name: "",
                    required: "",
                    label: "Name",
                    onChange: (event) => {
                        this.setState({
                            nameValue: event.target.value
                        })
                    }
                },
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Surname",
                    onChange: (event) => {
                        this.setState({
                            surnameValue: event.target.value
                        })
                    }
                },
                {
                    type: "email",
                    name: "",
                    required: "",
                    label: "Email",
                    onChange: (event) => {
                        this.setState({
                            emailValue: event.target.value
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
                            emailValue: event.target.value
                        })
                    }
                },
            ],
        };
        if (this.props.role.toLowerCase() === 'recruiter') {
            this.state.formData.splice(4, 0, {
                type: "text",
                name: "",
                required: "",
                label: "Company",
                onChange: (event) => {
                    this.setState({
                        companyNameValue: event.target.value
                    })
                }
            });
        }
    }

    render() {
        return (
            <div className="box">
                <h2>Signup as {this.props.role.toLowerCase()}</h2>
                <form>
                    {this.state.formData.map(inputBoxProps => {
                        return <InputBox
                            type={inputBoxProps.type}
                            name={inputBoxProps.name}
                            label={inputBoxProps.label}
                            required={inputBoxProps.required}
                            onChange={inputBoxProps.onChange}
                        />
                    })}
                    <SubmitButton/>
                </form>
            </div>
        );
    }
}