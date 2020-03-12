import React, {Component} from 'react';
import RecruiterWorkspace from "../components/recruiterworkspace/RecruiterWorkspace";
import {CircularMenu} from "../components/circularmenu/CircularMenu";


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
