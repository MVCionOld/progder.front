import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from 'classnames';
import Card from './Card';
import Popup from './Popup';
import cardsProps from "./CardProps";
import {RecruiterButton} from "./RecruiterButton";
import "./RecruiterWorkspace.css";
import apiClientService from "../../services/apiClientService";


export class RecruiterWorkspace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            noNewCandidates: true,
            currentCandidateIdx: 0
        };
    }

    fetchCandidates = async () => {
        apiClientService("engagement/recruiter/new", {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        ).then((candidates) => {
            if (Array.isArray(candidates) && candidates.length > 0) {
                this.setState({
                    candidates: candidates,
                    currentCandidateIdx: 0,
                    noNewCandidates: false
                })
            } else {
                this.setState({
                    candidates: [],
                    noNewCandidates: true
                })
            }
        }).catch(reason => {
            this.setState({
                candidates: [],
                noNewCandidates: true
            })
        });
    };

    componentDidMount() {
        this.fetchCandidates().then(r => {
        });
    }

    makeChoice = (invite) => {
        // const body = JSON.stringify({
        //     state: invite ? "RA" : "RR",
        //     candidate: this.state.candidates[this.state.currentCandidateIdx]["id"]
        // });
        // apiClientService("engagement/recruiter", {
        //         method: "post",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: body,
        //     }
        // ).then(r => {
        // });
        if (this.state.currentCandidateIdx === this.state.candidates.length - 1) {
            this.fetchCandidates().then(r => {
            });
        } else {
            this.setState({
                currentCandidateIdx: this.state.currentCandidateIdx + 1
            });
        }
    };

    render() {
        const blurStyleClass = classNames({
            "container": true,
            "active": this.props.blurProps.popupReducer.blur
        });
        const isPopupStyleClass = (dataText) => {
            return this.props.blurProps.popupReducer.blur
                && dataText === this.props.blurProps.popupReducer.cardType
        };
        return (
            <React.Fragment>
                {this.state.noNewCandidates ? <h1 className={"recruiter-msg"}>NO NEW CANDIDATES</h1> :
                    <div className="recruiter-main-container">
                        <div className={blurStyleClass} id="blur">
                            {cardsProps.map(
                                cardProps => <Card
                                    key={cardProps.id}
                                    imgSrc={cardProps.imgSrc}
                                    dataText={cardProps.dataText}>
                                    {this.state.candidates[this.state.currentCandidateIdx][cardProps.textField]}
                                </Card>
                            )}
                            <div className={"button"}>
                                <RecruiterButton type={"ignore"} onClick={() => this.makeChoice(false)}>
                                    Ignore
                                </RecruiterButton>
                            </div>
                            <div className={"button"}>
                                <RecruiterButton type={"invite"} onClick={() => this.makeChoice(true)}>
                                    Invite
                                </RecruiterButton>
                            </div>
                        </div>
                        <div id="popup">
                            {cardsProps.map(
                                cardProps => <Popup
                                    key={cardProps.id}
                                    popup={isPopupStyleClass(cardProps.dataText)}
                                    dataText={cardProps.dataText}>
                                    {this.state.candidates[this.state.currentCandidateIdx][cardProps.textFieldExtended]}
                                </Popup>
                            )}
                        </div>
                    </div>
                }
            </React.Fragment>);
    }
}

export default connect(
    state => ({blurProps: state})
)(RecruiterWorkspace);