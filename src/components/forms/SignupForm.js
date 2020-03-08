import React, {useState} from 'react';
import "./LoginSignupForm.css";
import {InputBox} from "./InputBox";
import {SubmitButton} from "./SubmitButton";


function RecruiterSignupForm(props) {

    const role = props.role.toLowerCase();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [password, setPassword] = useState('');

    let onSubmit = React.useCallback(async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            username, name, surname, email, company, password
        });
        await fetch("http://localhost:8000/api/users/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
    }, [username, name, surname, email, company, password]);

    const formData = [
        {
            type: "text",
            name: "",
            required: "",
            label: "Username",
            onChange: (e) => setUsername(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Name",
            onChange: (e) => setName(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Surname",
            onChange: (e) => setSurname(e.target.value)
        },
        {
            type: "email",
            name: "",
            required: "",
            label: "Email",
            onChange: (e) => setEmail(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Company",
            onChange: (e) => setCompany(e.target.value)
        },
        {
            type: "password",
            name: "",
            required: "",
            label: "Password",
            onChange: (e) => setPassword(e.target.value)
        },
    ];

    return (
        <div className="box" id="signup">
            <h2>Signup as {role}</h2>
            <form>
                {formData.map(inputBoxProps => (
                    <InputBox
                        type={inputBoxProps.type}
                        name={inputBoxProps.name}
                        label={inputBoxProps.label}
                        required={inputBoxProps.required}
                        onChange={inputBoxProps.onChange}
                    />
                ))}
                <SubmitButton value={"Submit"} onClick={onSubmit}/>
            </form>
        </div>
    );
}


function CandidateSignupForm(props) {

    const role = props.role.toLowerCase();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [personalInfo, setPersonalInfo] = useState('');
    const [personalInfoExtended, setPersonalInfoExtended] = useState('');
    const [skillsInfo, setSkillsInfo] = useState('');
    const [skillsInfoExtended, setSkillsInfoExtended] = useState('');
    const [wishesInfo, setWishesInfo] = useState('');
    const [wishesInfoExtended, setWishesInfoExtended] = useState('');
    const [extraInfo, setExtraInfo] = useState('');
    const [extraInfoExtended, setExtraInfoExtended] = useState('');
    const [password, setPassword] = useState('');

    let onSubmit = React.useCallback(async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            username, name, surname, email,
            personalInfo, personalInfoExtended, skillsInfo, skillsInfoExtended, wishesInfo, wishesInfoExtended,
            extraInfo, extraInfoExtended, password
        });
        await fetch("http://localhost:8000/api/users/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
    }, [username, name, surname, email,
        personalInfo, personalInfoExtended, skillsInfo, skillsInfoExtended, wishesInfo, wishesInfoExtended,
        extraInfo, extraInfoExtended, password]);

    const formData = [
        {
            type: "text",
            name: "",
            required: "",
            label: "Username",
            onChange: (e) => setUsername(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Name",
            onChange: (e) => setName(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Surname",
            onChange: (e) => setSurname(e.target.value)
        },
        {
            type: "email",
            name: "",
            required: "",
            label: "Email",
            onChange: (e) => setEmail(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Personal info",
            onChange: (e) => setPersonalInfo(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Personal info (extended)",
            onChange: (e) => setPersonalInfoExtended(e.target.value)
        },

        {
            type: "text",
            name: "",
            required: "",
            label: "Skills info",
            onChange: (e) => setSkillsInfo(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Skills info (extended)",
            onChange: (e) => setSkillsInfoExtended(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Wishes info",
            onChange: (e) => setWishesInfo(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Wishes info (extended)",
            onChange: (e) => setWishesInfoExtended(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Extra info",
            onChange: (e) => setExtraInfo(e.target.value)
        },
        {
            type: "text",
            name: "",
            required: "",
            label: "Extra info (extended)",
            onChange: (e) => setExtraInfoExtended(e.target.value)
        },
        {
            type: "password",
            name: "",
            required: "",
            label: "Password",
            onChange: (e) => setPassword(e.target.value)
        },
    ];

    return (
        <div className="box" id="signup">
            <h2>Signup as {role}</h2>
            <form>
                {formData.map(inputBoxProps => (
                    <InputBox
                        type={inputBoxProps.type}
                        name={inputBoxProps.name}
                        label={inputBoxProps.label}
                        required={inputBoxProps.required}
                        onChange={inputBoxProps.onChange}
                    />
                ))}
                <SubmitButton value={"Submit"} onClick={onSubmit}/>
            </form>
        </div>
    );
}

export function SignupForm(props) {
    const role = props.role.toLowerCase();
    return role === 'recruiter'
        ? <RecruiterSignupForm role={role}/>
        : <CandidateSignupForm role={role}/>;
}
