import React, {Component} from "react";
import './EngagementItem.css';
import {EngagementButton} from "./EngagementButton";
import {SubmitButton} from "./SubmitButton";


export class EngagementItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mounted: true
        };
        this.handleUnmountWithAcceptance = this.handleUnmountWithAcceptance.bind(this);
        this.handleUnmountWithRecejtion = this.handleUnmountWithRecejtion.bind(this);
    }

    handleUnmountWithAcceptance() {
        console.log("Accepted");
        this.setState((props, state) => ({
            mounted: false
        }));
    }

    handleUnmountWithRecejtion() {
        console.log("Rejected");
        this.setState((props, state) => ({
            mounted: false
        }));
    }

    render = () => {
        return (
            this.state.mounted &&
            <div className="engagement-item">
                <div className="content">
                    <div>
                        <h3>Invite from {this.props.recruiterLogin}</h3>
                        <p>Company: {this.props.companyName}</p>
                        <div className="btns">
                            <EngagementButton
                                type={"accept-btn"}
                                onClick={this.handleUnmountWithAcceptance}>
                                Accept
                            </EngagementButton>
                            <EngagementButton
                                type={"reject-btn"}
                                onClick={this.handleUnmountWithRecejtion}>
                                Reject
                            </EngagementButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}