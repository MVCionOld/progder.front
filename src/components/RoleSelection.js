import React, {Component} from 'react';
import "./RoleSelection.css";


const Selection = props => <li>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" data-text={props.role}>{props.role}</a>
</li>;

export class RoleSelection extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <Selection role={"Developer"}/>
                    <Selection role={"Manager"}/>
                </ul>
            </div>
        );
    }
}