import {Route, Switch, withRouter} from 'react-router';
import {App} from "../App";
import React from "react";


const MainRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={App}/>
        </Switch>
    )
};

export default withRouter(MainRouter);

