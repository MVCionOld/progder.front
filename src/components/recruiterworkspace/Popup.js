import React, {Component} from "react";
import "./RecruiterWorkspace.css";


export class Popup extends Component {

    toggle() {
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        let popup = (() => {
            const popupElem = document.getElementById('popup');
            return popupElem === null
                ? null
                : popupElem.getElementsByClassName('active')[0];
        })();
        if (popup !== null) {
            popup.classList.toggle("active");
        }
    }

    render() {
        return (
            <div id={this.props.dataText}>
                <h2>{this.props.dataText}</h2>
                <p>{this.props.children}</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" onClick={this.toggle.bind(this)}>Close</a>
            </div>
        );
    }
}