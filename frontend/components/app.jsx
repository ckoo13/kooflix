import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util';

import LoginFormContainer from './session_forms/LoginFormContainer';
import SignupFormContainer from './session_forms/SignupFormContainer';

const App = () => {
    return (
        <div>
           <AuthRoute path='/login' component={LoginFormContainer} />
           <AuthRoute path='/signup' component={SignupFormContainer} />
        </div>
    )
};

export default App;