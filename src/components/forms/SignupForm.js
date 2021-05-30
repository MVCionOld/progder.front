import React, {useState} from 'react';
import {Redirect} from 'react-router';
import "./LoginSignupForm.sass";
import {InputBox} from "./InputBox";
import {SubmitButton} from "./SubmitButton";
import {API_URL} from "../../services/apiClientService";


function RecruiterSignupForm(props) {

    const role = props.role.toLowerCase();

    const [redirect, setRedirect] = useState(false);

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [password, setPassword] = useState('');

    let onSubmit = React.useCallback(async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            username: username,
            firstName: name,
            lastName: surname,
            email: email,
            password: password,
            companyName: company
        });
        const response = await fetch(`${API_URL}register/recruiter`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: data
        });
        if (response.ok) {
            setRedirect(true);
        } else {
            console.error(response);
        }
    }, [username, name, surname, email, company, password]);

    const formFieldsConstructor = [
        {
            id: 0,
            type: "text",
            label: "Username",
            onChange: (e) => setUsername(e.target.value)
        },
        {
            id: 1,
            type: "text",
            label: "Name",
            onChange: (e) => setName(e.target.value)
        },
        {
            id: 2,
            type: "text",
            label: "Surname",
            onChange: (e) => setSurname(e.target.value)
        },
        {
            id: 3,
            type: "email",
            label: "Email",
            onChange: (e) => setEmail(e.target.value)
        },
        {
            id: 4,
            type: "text",
            label: "Company",
            onChange: (e) => setCompany(e.target.value)
        },
        {
            id: 5,
            type: "password",
            label: "Password",
            onChange: (e) => setPassword(e.target.value)
        },
    ];

    if (!redirect) {
        return (
            <div className="box" id="signup">
                <h2>Signup as {role}</h2>
                <form>
                    {formFieldsConstructor.map(inputBoxProps => (
                        <InputBox
                            key={inputBoxProps.id}
                            type={inputBoxProps.type}
                            label={inputBoxProps.label}
                            onChange={inputBoxProps.onChange}
                        />
                    ))}
                    <SubmitButton value={"Submit"} onClick={onSubmit}/>
                </form>
            </div>
        );
    } else {
        return <Redirect to={`/${role}/invites`}/>;
    }
}


function CandidateSignupForm(props) {

    const role = props.role.toLowerCase();

    const [redirect, setRedirect] = useState(false);

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
            username: username,
            firstName: name,
            lastName: surname,
            email: email,
            password: password,
            personalInfo: personalInfo,
            personalInfoExtended: personalInfoExtended,
            skillsInfo: skillsInfo,
            skillsInfoExtended: skillsInfoExtended,
            wishesInfo: wishesInfo,
            wishesInfoExtended: wishesInfoExtended,
            extraInfo: extraInfo,
            extraInfoExtended: extraInfoExtended
        });
        const response = await fetch(`${API_URL}register/candidate`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: data
        });
        if (response.ok) {
            setRedirect(true);
        } else {
            console.error(response);
        }
    }, [
        username,
        name,
        surname,
        email,
        personalInfo,
        personalInfoExtended,
        skillsInfo,
        skillsInfoExtended,
        wishesInfo,
        wishesInfoExtended,
        extraInfo,
        extraInfoExtended,
        password
    ]);

    const formFieldsConstructor = [
        {
            id: 0,
            type: "text",
            label: "Username",
            onChange: (e) => setUsername(e.target.value)
        },
        {
            id: 1,
            type: "text",
            label: "Name",
            onChange: (e) => setName(e.target.value)
        },
        {
            id: 2,
            type: "text",
            label: "Surname",
            onChange: (e) => setSurname(e.target.value)
        },
        {
            id: 3,
            type: "email",
            label: "Email",
            onChange: (e) => setEmail(e.target.value)
        },
        {
            id: 4,
            type: "text",
            label: "Personal info",
            onChange: (e) => setPersonalInfo(e.target.value)
        },
        {
            id: 5,
            type: "text",
            label: "Personal info (extended)",
            onChange: (e) => setPersonalInfoExtended(e.target.value)
        },
        {
            id: 6,
            type: "text",
            label: "Skills info",
            onChange: (e) => setSkillsInfo(e.target.value)
        },
        {
            id: 7,
            type: "text",
            label: "Skills info (extended)",
            onChange: (e) => setSkillsInfoExtended(e.target.value)
        },
        {
            id: 8,
            type: "text",
            label: "Wishes info",
            onChange: (e) => setWishesInfo(e.target.value)
        },
        {
            id: 9,
            type: "text",
            label: "Wishes info (extended)",
            onChange: (e) => setWishesInfoExtended(e.target.value)
        },
        {
            id: 10,
            type: "text",
            label: "Extra info",
            onChange: (e) => setExtraInfo(e.target.value)
        },
        {
            id: 11,
            type: "text",
            label: "Extra info (extended)",
            onChange: (e) => setExtraInfoExtended(e.target.value)
        },
        {
            id: 12,
            type: "password",
            label: "Password",
            onChange: (e) => setPassword(e.target.value)
        },
    ];

    if (!redirect) {
        return (
            <div className="box" id="signup">
                <h2>Signup as {role}</h2>
                <form>
                    {formFieldsConstructor.map(inputBoxProps => (
                        <InputBox
                            key={inputBoxProps.id}
                            type={inputBoxProps.type}
                            label={inputBoxProps.label}
                            onChange={inputBoxProps.onChange}
                        />
                    ))}
                    <SubmitButton value={"Submit"} onClick={onSubmit}/>
                </form>
            </div>
        );
    } else {
        return <Redirect to={`/${role}/login`}/>;
    }
}

export function SignupForm(props) {
    const role = props.role.toLowerCase();
    return role === 'recruiter'
        ? <RecruiterSignupForm role={role}/>
        : <CandidateSignupForm role={role}/>;
}
