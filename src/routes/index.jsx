import {Route, Switch, withRouter} from 'react-router';
import {EnterApp} from "../apps/EnterApp";
import React from "react";
import {EnterMenu, RoleMenu} from "../components/selectionmenu/SelectionMenu";
import {CandidateApp} from "../apps/CandidateApp";
import {RecruiterApp} from "../apps/RecruiterApp";


const MainRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={RoleMenu}/>
            <Route path={'/candidate/invites'} component={CandidateApp}/>
            <Route path={'/recruiter/invites'} component={RecruiterApp}/>
            <Route exact path={'/:role'} component={EnterMenu}/>
            <Route exact path={'/:role/:action'} component={EnterApp}/>
        </Switch>
    )
};

export default withRouter(MainRouter);

