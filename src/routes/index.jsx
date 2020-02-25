import {Route, Switch, withRouter} from 'react-router';
import {EnterApp} from "../EnterApp";
import React from "react";
import {EnterMenu, RoleMenu} from "../components/SelectionMenu";
import {CandidateWorkspace} from "../components/CandidateWorkspace";
import {RecruiterWorkspace} from "../components/RecruiterWorkspace";


const MainRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={RoleMenu}/>
            <Route path={'/candidate/invites'} component={CandidateWorkspace}/>
            <Route path={'/recruiter/interviews'} component={RecruiterWorkspace}/>
            <Route exact path={'/:role'} component={EnterMenu}/>
            <Route exact path={'/:role/:action'} component={EnterApp}/>

        </Switch>
    )
};

export default withRouter(MainRouter);

