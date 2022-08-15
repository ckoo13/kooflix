import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    //testing purposes
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    let store;

    if (window.currentUser) {
        // if there is a current user we hardcode our state to have that currentUser
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        };
        store = configureStore(preloadedState)
        // reset the currentUser
        delete window.currentUser;
        // or we just make our state like normal
    } else {
        store = configureStore();
    }
    

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})