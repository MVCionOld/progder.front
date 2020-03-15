import React, {useState} from 'react';
import "./LoginSignupForm.css";
import {InputBox} from "./InputBox";
import {SubmitButton} from "./SubmitButton";


export function LoginForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let onSubmit = React.useCallback(async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        if (response.ok) {
            const {access, refresh} = await response.json();
            window.localStorage.setItem("access", access);
            window.localStorage.setItem("refresh", refresh);
        } else {
            console.error(response);
        }
    }, [username, password]);

    const formFieldsConstructor = [
        {
            id: 0,
            type: "text",
            label: "Username",
            onChange: (event) => setUsername(event.target.value)
        },
        {
            id: 1,
            type: "password",
            label: "Password",
            onChange: (event) => setPassword(event.target.value)
        }
    ];

    return (
        <div className="box" id="login">
            <h2>Login as {props.role.toLowerCase()}</h2>
            <form>
                {formFieldsConstructor.map((inputBoxProps => {
                    return <InputBox
                        key={inputBoxProps.id}
                        type={inputBoxProps.type}
                        label={inputBoxProps.label}
                        onChange={inputBoxProps.onChange}
                    />
                }))}
                <SubmitButton value={"Submit"} onClick={onSubmit}/>
            </form>
        </div>
    );
}