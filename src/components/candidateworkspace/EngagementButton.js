import React from "react";
import './EngagementButton.css';


export const EngagementButton = props => {
    return (
        <button className={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    )
};