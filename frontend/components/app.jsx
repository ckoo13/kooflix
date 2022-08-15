import React from 'react';
import { Route } from 'react-router-dom'

import LoginFormContainer from './session_forms/loginFormContainer';
import SignupFormContainer from './session_forms/SignupFormContainer';

const App = () => {
    return (
        <div>
           <Route path='/login' component={LoginFormContainer} />
           <Route path='/signup' component={SignupFormContainer} />
        </div>
    )
};

export default App;