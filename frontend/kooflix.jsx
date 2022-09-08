import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    let store;
    const root = document.getElementById('root');

    if (window.currentUser) {
        // if there is a current user we hardcode our state to have that currentUser
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {
                id: window.currentUser.id,
                currentProfile: JSON.parse(localStorage.getItem('currentProfile'))
            }
        };
        store = configureStore(preloadedState)
        // reset the currentUser
        delete window.currentUser;
        // or we just make our state like normal
    } else {
        store = configureStore();
    }

    store.subscribe(() => {
        localStorage.setItem(
            'currentProfile',
            JSON.stringify(store.getState().session.currentProfile)
        );
    });
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
})