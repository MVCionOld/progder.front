import React, {Component} from 'react';
import "./SelectionMenu.sass";


const Selection = props => (
    <li>
        <a
            href={props.href}
            data-text={props.children.toUpperCase()}>
            {props.children}
        </a>
    </li>
);

export class EnterMenu extends Component {
    render() {
        const role = this.props.match.params.role;
        return (
            <div className="navigation">
                <ul>
                    <Selection href={`/${role}/login`}>Login</Selection>
                    <Selection href={`/${role}/signup`}>Signup</Selection>
                </ul>
            </div>
        );
    }
}

export class RoleMenu extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <Selection href={"/candidate"}>Candidate</Selection>
                    <Selection href={"/recruiter"}>Recruiter</Selection>
                </ul>
            </div>
        );
    }
}

