import React, {Component} from "react";
import {EngagementButton} from "./EngagementButton";
import './EngagementItem.css';


export class EngagementItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mounted: true,
            accepted: null
        };
    }

    handleUnmounting = () => {
        this.setState(() => ({
            mounted: false
        }));
    };

    handleUnmountWithAcceptance = () => {
        console.log("Accepted");
        this.setState(() => ({
            accepted: true
        }));
        setTimeout(this.handleUnmounting, 1400);
    };

    handleUnmountWithRecejtion = () => {
        console.log("Rejected");
        this.setState(() => ({
            accepted: false
        }));
        setTimeout(this.handleUnmounting, 1400);
    };

    render = () => {
        const flipCardAcceptClass = this.state.accepted === true
            ? "accept activated"
            : "accept";
        const flipCardRejectClass = this.state.accepted === false
            ? "reject activated"
            : "reject";
        const contentClass = this.state.accepted === null
            ? "content"
            : (this.state.accepted
                ? "content selected accepted"
                : "content selected rejected");
        return (
            this.state.mounted &&
            <div className={"engagement-item"}>
                <div className={"flip-card"}>
                    <div className={flipCardAcceptClass}>
                        <h2>accept</h2>
                    </div>
                    <div className={flipCardRejectClass}>
                        <h2>reject</h2>
                    </div>
                </div>
                <div className={contentClass}>
                    <h3>Invite from<br/>{this.props.recruiterLogin}</h3>
                    <p>Company:<br/>{this.props.companyName}</p>
                    <div className="btns">
                        <EngagementButton
                            type={"reject-btn"}
                            onClick={this.handleUnmountWithRecejtion}>
                            Reject
                        </EngagementButton>
                        <EngagementButton
                            type={"accept-btn"}
                            onClick={this.handleUnmountWithAcceptance}>
                            Accept
                        </EngagementButton>
                    </div>
                </div>
            </div>
        );
    }
}