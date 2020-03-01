import React, {Component} from 'react';
import {CandidateWorkspace} from "./components/CandidateWorkspace";
import {CircularMenu} from "./components/CircularMenu";


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
