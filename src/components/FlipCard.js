import React, {Component} from 'react';
import './FlipCard.css'


export class FlipCard extends Component {
    render() {
        return (
            <div className={"card"}>
                <div className={"face accept"}>
                    <h2>accept</h2>
                </div>
                <div className={"face reject"}>
                    <h2>reject</h2>
                </div>
            </div>
        );
    }
}