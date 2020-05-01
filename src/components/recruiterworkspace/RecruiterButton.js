import React from "react";
import classNames from "classnames";
import './RecruiterButton.sass';


export const RecruiterButton = (props) => {
    const btnStyleClass = classNames({
        "button-ignore": props.type === "ignore",
        "button-invite": props.type === "invite"
    });
    const onClick = (e) => {
        e.preventDefault();
        props.onClick();
    };
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div className="recruiter-button" onClick={onClick}>
            <span className={btnStyleClass}><h1>{props.children}</h1></span>
        </div>
    );
};