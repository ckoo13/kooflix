import React from 'react';
import { Route, Redirect, Switch, Link} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_forms/LoginFormContainer';
import SignupFormContainer from './session_forms/SignupFormContainer';
import { splash } from './splash/Splash';
import Browse from './browse/Browse';

const App = () => {
    return (
        <div>
            <Switch>
                <ProtectedRoute path='/browse' component={Browse} />
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
                <AuthRoute path='/' exact component={splash} />
            </Switch>
        </div>
    )
};

export default App;