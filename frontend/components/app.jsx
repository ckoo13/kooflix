import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_forms/LoginFormContainer';
import SignupFormContainer from './session_forms/SignupFormContainer';
import { splash } from './splash/splash';

const App = () => {
    return (
        <div>
           <AuthRoute path='/login' component={LoginFormContainer} />
           <AuthRoute path='/signup' component={SignupFormContainer} />
           <Route path='/' exact component={splash} />
        </div>
    )
};

export default App;