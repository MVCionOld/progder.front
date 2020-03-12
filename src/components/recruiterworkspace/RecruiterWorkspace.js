import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from 'classnames';
import Card from './Card';
import Popup from './Popup';
import {RecruiterButton} from "./RecruiterButton";
import "./RecruiterWorkspace.css";


const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
    "                                    incididunt ut.";
const loremIpsumFull = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
    "                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
    "                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n" +
    "                            culpa qui officia deserunt mollit anim id est laborum.";


const cardsProps = [
    {
        id: 0,
        dataText: "General",
        imgSrc: "/general.png"
    },
    {
        id: 1,
        dataText: "Skills",
        imgSrc: "/skills.png"
    },
    {
        id: 2,
        dataText: "Extra",
        imgSrc: "/extra.png"
    },
    {
        id: 3,
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
        console.log(this.props);
    };

    ignore = () => {
        console.log(this.props);
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
            <div className="recruiter-main-container">
                <div className={blurStyleClass} id="blur">
                    {cardsProps.map(
                        cardProps => <Card
                            key={cardProps.id}
                            imgSrc={cardProps.imgSrc}
                            dataText={cardProps.dataText}>
                            {loremIpsum}
                        </Card>
                    )}
                    <div className={"button"}>
                        <RecruiterButton type={"ignore"} onClick={this.ignore}>
                            Ignore
                        </RecruiterButton>
                    </div>
                    <div className={"button"}>
                        <RecruiterButton type={"invite"} onClick={this.invite}>
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
                            {loremIpsumFull}
                        </Popup>
                    )}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({blurProps: state})
)(RecruiterWorkspace);