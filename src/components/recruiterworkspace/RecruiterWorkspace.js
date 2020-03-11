import React, {Component} from 'react';
import "./RecruiterWorkspace.css";
import {Card} from './Card';
import {Popup} from './Popup';
import {RecruiterButton} from "./RecruiterButton";


const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
    "                                    incididunt ut.";
const loremIpsumFull = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
    "                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
    "                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n" +
    "                            culpa qui officia deserunt mollit anim id est laborum.";


const cardsProps = [
    {
        dataText: "General",
        imgSrc: "/general.png"
    },
    {
        dataText: "Skills",
        imgSrc: "/skills.png"
    },
    {
        dataText: "Extra",
        imgSrc: "/extra.png"
    },
    {
        dataText: "Wishes",
        imgSrc: "/wishes.png"
    }
];


export class RecruiterWorkspace extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    invite = () => {

    };

    ignore = () => {

    };

    render() {
        return (
            <div className="recruiter-main-container">
                <div className="container" id="blur">
                    {cardsProps.map(
                        cardProps => <Card
                            imgSrc={cardProps.imgSrc}
                            dataText={cardProps.dataText}>
                            {loremIpsum}
                        </Card>
                    )}
                    <div className={"button"}>
                        <RecruiterButton type={"ignore"} onClick={this.ignore}>Ignore</RecruiterButton>
                    </div>
                    <div className={"button"}>
                        <RecruiterButton type={"invite"} onClick={this.invite}>Invite</RecruiterButton>
                    </div>
                </div>
                <div id="popup">
                    {cardsProps.map(
                        cardProps => <Popup
                            dataText={cardProps.dataText}>
                            {loremIpsumFull}
                        </Popup>
                    )}
                </div>
            </div>
        );
    }
}