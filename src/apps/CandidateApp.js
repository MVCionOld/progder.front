import React, {Component} from 'react';
import {CandidateWorkspace} from "../components/candidateworkspace/CandidateWorkspace";
import {CircularMenu} from "../components/circularmenu/CircularMenu";


export class CandidateApp extends Component {

    render() {
        return (
            <div className="CandidateApp">
                <CandidateWorkspace/>
                <CircularMenu role={"candidate"}/>
            </div>
        );
    }
}
