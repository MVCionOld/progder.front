import React, {Component} from 'react';
import {EngagementItem} from "./EngagementItem";
import './CandidateWorkspace.css';
import apiClientService from "../../services/apiClientService";


export class CandidateWorkspace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invites: [],
            noNewInvites: true,
            invitesCheckedCnt: 0
        };
    }

    fetchInvites = async () => {
        apiClientService("engagement/candidate", {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        ).then((invites) => {
            if (Array.isArray(invites) && invites.length > 0) {
                this.setState({
                    invites: invites,
                    noNewInvites: false,
                    invitesCheckedCnt: 0
                });
                console.log(this.state)
            } else {
                this.setState({
                    invites: [],
                    noNewInvites: true,
                    invitesCheckedCnt: 0
                });
            }
        }).catch(reason => {
            this.setState({
                invites: [],
                noNewInvites: true,
                invitesCheckedCnt: 0
            });
        });
    };

    componentDidMount() {
        this.fetchInvites().then(r => {
        });
    }

    makeChoice = (accept, engagementItem) => {
        this.setState({
            invitesCheckedCnt: this.state.invitesCheckedCnt + 1
        });
        const body = JSON.stringify({
            ...engagementItem,
            state: accept ? "CA" : "CR"
        });
        apiClientService(`engagement/candidate/${engagementItem.id}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json"
                },
                body: body,
            }
        ).then(r => {
        });
        if (this.state.invitesCheckedCnt === this.state.invites.length) {
            this.fetchInvites().then(r => {
            });
        } else {
            this.setState({
                invitesCheckedCnt: this.state.invitesCheckedCnt + 1
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                {this.state.noNewInvites ? <h1 className={"candidate-msg"}>NO INVITES VISIT LATER</h1> :
                    <div className={"candidate-main-container"}>
                        <div className={"container"}>
                            {this.state.invites.map(
                                engagemenentItem => (
                                    <EngagementItem
                                        key={engagemenentItem.id}
                                        recruiterLogin={engagemenentItem.recruiter.user.username}
                                        companyName={engagemenentItem.recruiter.company_name}
                                        onAccept={() => this.makeChoice(true, engagemenentItem)}
                                        onReject={() => this.makeChoice(false, engagemenentItem)}
                                    />)
                            )}
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    };
}
