import React, {useState} from 'react';
import "./LoginSignupForm.css";
import {InputBox} from "./InputBox";
import {SubmitButton} from "./SubmitButton";


export function LoginForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    this.onSubmit = React.useCallback(async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            username,
            password
        });
        await fetch("http://localhost:8000/api/users/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
    }, [username, password]);

    const formData = [
        {
            type: "text",
            name: "",
            required: "",
            label: "Username",
            onChange: (event) => setUsername(event.target.value)
        },
        {
            type: "password",
            name: "",
            required: "",
            label: "Password",
            onChange: (event) => setPassword(event.target.value)
        }
    ];

    return (
        <div className="box" id="login">
            <h2>Login as {this.props.role.toLowerCase()}</h2>
            <form>
                {formData.map((inputBoxProps => {
                    return <InputBox
                        type={inputBoxProps.type}
                        name={inputBoxProps.name}
                        label={inputBoxProps.label}
                        required={inputBoxProps.required}
                        onChange={inputBoxProps.onChange}
                    />
                }))}
                <SubmitButton value={"Submit"} onClick={this.onSubmit}/>
            </form>
        </div>
    );
}