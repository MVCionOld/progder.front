import React, {Component} from "react";
import {connect} from "react-redux";
import {showPopup} from "../../actions";
import "./RecruiterWorkspace.css";

export class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataText: this.props.dataText
        }
    }

    toggle = (e) => {
        e.preventDefault();
        this.props.showCardBlur(this.props.dataText);
    };

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
                        <a href="#" onClick={this.toggle}>Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({blurProps: state}),
    dispatch => ({
        showCardBlur(dataText) {
            dispatch(showPopup(dataText));
        }
    })
)(Card);