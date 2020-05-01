import React, {Component} from "react";
import {connect} from "react-redux";
import classNames from 'classnames';
import {hidePopup} from "../../actions";
import "./Popup.sass";


export class Popup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataText: this.props.dataText
        }
    }

    toggle = (e) => {
        e.preventDefault();
        this.props.hideCardBlur(this.props.dataText);
    };

    render() {
        const popupStyleClass = classNames({
            "active": this.props.popup
        });
        return (
            <div id={this.props.dataText} className={popupStyleClass}>
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