import React from 'react';
import "./InputBox.css";


export const InputBox = props => (
    <div className="inputbox">
        <input
            type={props.type}
            name={props.name}
            required={props.required}
            value={props.value}
            placeholder={""}
            onChange={props.onChange}/>
        <label>{props.label}</label>
    </div>
);