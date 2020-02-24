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
        setTimeout(this.handleUnmounting, 1100);
    }

    handleUnmountWithRecejtion() {
        console.log("Rejected");
        setTimeout(this.handleUnmounting, 1100);
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
                    {/*<div className={"face accept"}>*/}
                    {/*    <h2>accept</h2>*/}
                    {/*</div>*/}
                    {/*<div className={"face reject"}>*/}
                    {/*    <h2>reject</h2>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}