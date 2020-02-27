import React from "react";
import './SubmitButton.css';


export const SubmitButton = ({value, onClick}) => (
    <input
        type="submit"
        name=""
        value={value}
        onClick={onClick}/>
);