import React, {Component} from 'react';
import "./LoginSignupForm.css";


export const InputBox = props => (
    <div className="inputbox">
        <input type={props.type} name={props.name} required={props.required} placeholder={""}/>
        <label>{props.label}</label>
    </div>
);