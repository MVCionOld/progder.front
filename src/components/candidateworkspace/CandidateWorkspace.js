import React, {Component} from 'react';
import {EngagementItem} from "./EngagementItem";
import './CandidateWorkspace.css';


const engagemenentsItems = [
    {
        "companyName": "Tinkoff",
        "recruiterLogin": "e.ruzaykina"
    },
    {
        "companyName": "Yandex",
        "recruiterLogin": "o.arifanova"
    },
    {
        "companyName": "Abbyy",
        "recruiterLogin": "t.lebedev"
    },
    {
        "companyName": "1C",
        "recruiterLogin": "n.starichkov"
    },
    {
        "companyName": "Tinkoff",
        "recruiterLogin": "e.ruzaykina"
    },
    {
        "companyName": "Yandex",
        "recruiterLogin": "o.arifanova"
    },
    {
        "companyName": "Abbyy",
        "recruiterLogin": "t.lebedev"
    },
    {
        "companyName": "1C",
        "recruiterLogin": "n.starichkov"
    },
    {
        "companyName": "Tinkoff",
        "recruiterLogin": "e.ruzaykina"
    },
    {
        "companyName": "Yandex",
        "recruiterLogin": "o.arifanova"
    },
    {
        "companyName": "Abbyy",
        "recruiterLogin": "t.lebedev"
    },
    {
        "companyName": "1C",
        "recruiterLogin": "n.starichkov"
    }
];


export class CandidateWorkspace extends Component {

    constructor(props) {
        super(props);
        this.invites = [];
    }

    render() {
        if (this.invites.length === 0) {
            return <h1>NO NEW INVITES</h1>;
        }
        return (
            <div className={"candidate-main-container"}>
                <div className={"container"}>
                    {this.invites.map(
                        engagemenentItem => <EngagementItem
                            recruiterLogin={engagemenentItem.recruiterLogin}
                            companyName={engagemenentItem.companyName}
                        />
                    )}
                </div>
            </div>
        );
    }
}
