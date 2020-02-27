import React, {Component} from 'react';
import "./LoginSignupForm.css";
import {InputBox} from "./InputBox";
import {SubmitButton} from "./SubmitButton";


export class SignupForm extends Component {

    constructor(props) {
        super(props);
        const role = this.props.role.toLowerCase();
        this.state = {
            usernameValue: '',
            nameValue: '',
            surnameValue: '',
            emailValue: '',
            passwordValue: '',
            companyNameValue: '',
            personalInfoShortenValue: '',
            personalInfoExtendedValue: '',
            skillsInfoShortenValue: '',
            skillsInfoExtendedValue: '',
            wishesInfoShortenValue: '',
            wishesInfoExtendedValue: '',
            extralInfoShortenValue: '',
            extraInfoExtendedValue: '',
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
                            passwordValue: event.target.value
                        })
                    }
                },
            ],
        };
        const specifiedFields = {
            'recruiter': [
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Company",
                    onChange: (event) => {
                        this.setState({
                            companyNameValue: event.target.value
                        })
                    }
                }
            ],
            'candidate': [
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Personal info",
                    onChange: (event) => {
                        this.setState({
                            personalInfoShortenValue: event.target.value
                        })
                    }
                },
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Personal info (extended)",
                    onChange: (event) => {
                        this.setState({
                            personalInfoExtendedValue: event.target.value
                        })
                    }
                },
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Skills info",
                    onChange: (event) => {
                        this.setState({
                            skillsInfoShortenValue: event.target.value
                        })
                    }
                },
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Skills info (extended)",
                    onChange: (event) => {
                        this.setState({
                            skillsInfoExtendedValue: event.target.value
                        })
                    }
                },
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Wishes info",
                    onChange: (event) => {
                        this.setState({
                            wishesInfoShortenValue: event.target.value
                        })
                    }
                },
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Wishes info (extended)",
                    onChange: (event) => {
                        this.setState({
                            wishesInfoExtendedValue: event.target.value
                        })
                    }
                },
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Extra info",
                    onChange: (event) => {
                        this.setState({
                            extralInfoShortenValue: event.target.value
                        })
                    }
                },
                {
                    type: "text",
                    name: "",
                    required: "",
                    label: "Extra info (extended)",
                    onChange: (event) => {
                        this.setState({
                            extralInfoExtendedValue: event.target.value
                        })
                    }
                }
            ]
        };
        specifiedFields[role].map(field =>
            this.state.formData.splice(this.state.formData.length - 1, 0, field)
        );
    }

    render() {
        return (
            <div className="box" id="signup">
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
                    <SubmitButton value={"Submit"}/>
                </form>
            </div>
        );
    }
}