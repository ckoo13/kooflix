import React from 'react';
import { Route, Redirect, Switch, Link} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_forms/LoginFormContainer';
import SignupFormContainer from './session_forms/SignupFormContainer';
import ProfileIndexContainer from './profile/ProfileIndexContainer';
import { Splash } from './splash/Splash';
import Browse from './browse/Browse';
import EditProfilesIndexContainer from './profile/EditProfilesIndexContainer';

const App = () => {
    return (
        <div>
            <Switch>
                <ProtectedRoute path='/browse' component={Browse} />
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
                <ProtectedRoute path='/profiles' exact component={ProfileIndexContainer} />
                <ProtectedRoute path='/profiles/edit' exact component={EditProfilesIndexContainer} />                <AuthRoute path='/' exact component={Splash} />
            </Switch>
        </div>
    )
};

export default App;