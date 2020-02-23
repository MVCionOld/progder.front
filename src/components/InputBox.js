import React, {Component} from 'react';
import "./InputBox.css";


export const InputBox = props => (
    <div className="inputbox">
        <input
            type={props.type}
            name={props.name}
            required={props.required}
            placeholder={""}
            onChange={props.onChange}/>
        <label>{props.label}</label>
    </div>
);