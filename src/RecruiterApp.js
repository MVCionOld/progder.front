import React, {Component} from 'react';
import {RecruiterWorkspace} from "./components/RecruiterWorkspace";
import {CircularMenu} from "./components/CircularMenu";


export class RecruiterApp extends Component {

    render() {
        return (
            <div className="RecruiterApp">
                <RecruiterWorkspace/>
                <CircularMenu role={"recruiter"}/>
            </div>
        );
    }
}
