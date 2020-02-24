import React, {Component} from "react";
import './EngagementItem.css';
import {EngagementButton} from "./EngagementButton";


export class EngagementItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mounted: true,
            accepted: null
        };
        this.handleUnmounting = this.handleUnmounting.bind(this);
        this.handleUnmountWithAcceptance = this.handleUnmountWithAcceptance.bind(this);
        this.handleUnmountWithRecejtion = this.handleUnmountWithRecejtion.bind(this);
    }

    handleUnmounting() {
        this.setState((props, state) => ({
            mounted: false
        }));
    }

    handleUnmountWithAcceptance() {
        console.log("Accepted");
        this.setState((props, state) => ({
            accepted: true
        }));
        setTimeout(this.handleUnmounting, 1200);
    }

    handleUnmountWithRecejtion() {
        console.log("Rejected");
        this.setState((props, state) => ({
            accepted: false
        }));
        setTimeout(this.handleUnmounting, 1200);
    }

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
        );
    }
}