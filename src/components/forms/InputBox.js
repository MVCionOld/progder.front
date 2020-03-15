import React from 'react';
import "./InputBox.css";


export const InputBox = props => (
    <div className="inputbox">
        <input
            type={props.type}
            placeholder={" "}
            onChange={props.onChange}
            required
        />
        <label>{props.label}</label>
    </div>
);