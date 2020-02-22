import React, {Component} from 'react';
import "./HRMain.css";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
    "                                    incididunt ut.";
const loremIpsumFull = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
    "                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
    "                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n" +
    "                            culpa qui officia deserunt mollit anim id est laborum.";

export class HRMain extends Component {

    componentDidMount() {

    }


    render() {
        function toggle(elem) {
            console.log(elem);
            let blur = document.getElementById("blur");
            if (blur === null) {
                return null;
            }
            blur.classList.toggle("active");
            let popup = function (e) {
                if (e === null) {
                    const popupElem = document.getElementById('popup');
                    return popupElem === null
                        ? null
                        : popupElem.getElementsByClassName('active')[0];
                } else {
                    let attr = null;
                    for (let found = false, parentElem = e; !found; parentElem = parentElem.parentNode) {
                        console.log(parentElem);
                        for (const node of parentElem.childNodes) {
                            if ('getAttribute' in node) {
                                attr = node.getAttribute('data-text');
                                if (attr != null && attr.length > 0) {
                                    found = true;
                                    break;
                                }
                            }
                        }
                    }
                    return document.getElementById(attr);
                }
            }(elem);
            if (popup !== null) {
                popup.classList.toggle("active");
            }
        }

        return <div className="hr-main-container">
            <div className="container" id="blur">
                <div className="card">
                    <div className="imgBx" data-text="design">
                        <img src={"/design.png"} alt={"not found"}/>
                    </div>
                    <div className="content">
                        <div>
                            <h3>Design</h3>
                            <p>{loremIpsum}</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" onClick={() => toggle(this)}>Read more</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx" data-text="code">
                        <img src={"/code.png"} alt={"not found"}/>
                    </div>
                    <div className="content">
                        <div>
                            <h3>Code</h3>
                            <p>{loremIpsum}</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" onClick={() => toggle(this)}>Read more</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx" data-text="launch">
                        <img src={"/launch.png"} alt={"not found"}/>
                    </div>
                    <div className="content">
                        <div>
                            <h3>Launch</h3>
                            <p>{loremIpsum}</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" onClick={() => toggle(this)}>Read more</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx" data-text="earn">
                        <img src={"/earn.png"} alt={"not found"}/>
                    </div>
                    <div className="content">
                        <div>
                            <h3>Earn</h3>
                            <p>{loremIpsum}</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" onClick={() => toggle(this)}>Read more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="popup">
                <div id="earn">
                    <h2>Earn</h2>
                    <p>{loremIpsumFull}</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" onClick={() => toggle(null)}>Close</a>
                </div>
                <div id="code">
                    <h2>Code</h2>
                    <p>{loremIpsumFull}</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" onClick={() => toggle(null)}>Close</a>
                </div>
                <div id="launch">
                    <h2>Launch</h2>
                    <p>{loremIpsumFull}</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" onClick={() => toggle(null)}>Close</a>
                </div>
                <div id="design">
                    <h2>Design</h2>
                    <p>{loremIpsumFull}</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" onClick={() => toggle(null)}>Close</a>
                </div>
            </div>

        </div>;
    }
}