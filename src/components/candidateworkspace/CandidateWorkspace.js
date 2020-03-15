import React, {Component} from 'react';
import {EngagementItem} from "./EngagementItem";
import './CandidateWorkspace.css';


const engagemenentsItems = [
    {
        "id": 1,
        "companyName": "Tinkoff",
        "recruiterLogin": "e.ruzaykina"
    },
    {
        "id": 2,
        "companyName": "Yandex",
        "recruiterLogin": "o.arifanova"
    },
    {
        "id": 3,
        "companyName": "Abbyy",
        "recruiterLogin": "t.lebedev"
    },
    {
        "id": 4,
        "companyName": "1C",
        "recruiterLogin": "n.starichkov"
    },
    {
        "id": 5,
        "companyName": "Tinkoff",
        "recruiterLogin": "e.ruzaykina"
    },
    {
        "id": 6,
        "companyName": "Yandex",
        "recruiterLogin": "o.arifanova"
    },
    {
        "id": 7,
        "companyName": "Abbyy",
        "recruiterLogin": "t.lebedev"
    },
    {
        "id": 8,
        "companyName": "1C",
        "recruiterLogin": "n.starichkov"
    },
    {
        "id": 9,
        "companyName": "Tinkoff",
        "recruiterLogin": "e.ruzaykina"
    },
    {
        "id": 10,
        "companyName": "Yandex",
        "recruiterLogin": "o.arifanova"
    },
    {
        "id": 11,
        "companyName": "Abbyy",
        "recruiterLogin": "t.lebedev"
    },
    {
        "id": 12,
        "companyName": "1C",
        "recruiterLogin": "n.starichkov"
    }
];


export class CandidateWorkspace extends Component {

    constructor(props) {
        super(props);
        this.invites = engagemenentsItems;
    }

    render() {
        if (this.invites.length === 0) {
            return <h1 className={"candidate-msg"}>NO INVITES VISIT LATER</h1>;
        }
        return (
            <div className={"candidate-main-container"}>
                <div className={"container"}>
                    {this.invites.map(
                        engagemenentItem => (
                            <EngagementItem
                                key={engagemenentItem.id}
                                recruiterLogin={engagemenentItem.recruiterLogin}
                                companyName={engagemenentItem.companyName}
                            />)
                    )}
                </div>
            </div>
        );
    }
}
