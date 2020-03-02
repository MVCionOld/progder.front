import React, {Component} from 'react';
import "./RecruiterWorkspace.css";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
    "                                    incididunt ut.";
const loremIpsumFull = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
    "                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
    "                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n" +
    "                            culpa qui officia deserunt mollit anim id est laborum.";

class Card extends Component {

    toggle() {
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        let popup = document.getElementById(this.props.dataText);
        popup.classList.toggle("active");
    }

    render() {
        return (
            <div className="card">
                <div className="imgBx" data-text={this.props.dataText}>
                    <img src={this.props.imgSrc} alt={"not found"}/>
                </div>
                <div className="content">
                    <div>
                        <h3>{this.props.dataText}</h3>
                        <p>{this.props.children}</p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" onClick={this.toggle.bind(this)}>Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}

class Popup extends Component {

    toggle() {
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        let popup = (() => {
            const popupElem = document.getElementById('popup');
            return popupElem === null
                ? null
                : popupElem.getElementsByClassName('active')[0];
        })();
        if (popup !== null) {
            popup.classList.toggle("active");
        }
    }

    render() {
        return (
            <div id={this.props.dataText}>
                <h2>{this.props.dataText}</h2>
                <p>{this.props.children}</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" onClick={this.toggle.bind(this)}>Close</a>
            </div>
        );
    }
}

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

    invite() {

    }

    ignore() {

    }

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