import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    //testing purposes
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    
    //testing store on the window
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to KooFlix</h1>, root);
})