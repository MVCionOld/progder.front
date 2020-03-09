import React, {Component} from "react";
import "./RecruiterWorkspace.css";

export class Card extends Component {

    toggle() {
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        let popup = document.getElementById(this.props.dataText);
        popup.classList.toggle("active");
    }

    render() {
        return (
            <div className="card">
                <div className="imgBx" data-text={this.props.dataText}>
                    <img src={this.props.imgSrc} alt={"not found"}/>
                </div>
                <div className="content">
                    <div>
                        <h3>{this.props.dataText}</h3>
                        <p>{this.props.children}</p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" onClick={this.toggle.bind(this)}>Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}