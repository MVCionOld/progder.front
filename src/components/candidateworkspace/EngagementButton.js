import React from "react";
import './EngagementButton.css';


export const EngagementButton = props => {
    const onClick = (e) => {
        e.preventDefault();
        props.onClick();
    };
    return (
        <button className={props.type} onClick={onClick}>
            {props.children}
        </button>
    )
};