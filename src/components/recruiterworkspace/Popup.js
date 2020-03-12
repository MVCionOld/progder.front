import React, {Component} from "react";
import {connect} from "react-redux";
import {hidePopup} from "../../actions";
import "./Popup.css";


export class Popup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataText: this.props.dataText
        }
    }

    toggle = () => {
        this.props.hideCardBlur(this.props.dataText);
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
    };

    render() {
        return (
            <div id={this.props.dataText}>
                <h2>{this.props.dataText}</h2>
                <p>{this.props.children}</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" onClick={this.toggle}>Close</a>
            </div>
        );
    }
}

export default connect(
    state => ({blurProps: state}),
    dispatch => ({
        hideCardBlur(dataText) {
            dispatch(hidePopup(dataText));
        }
    })
)(Popup);