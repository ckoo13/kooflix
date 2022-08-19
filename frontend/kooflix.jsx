import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing api util functions
import { fetchVideos, fetchVideo } from './util/video_util'

document.addEventListener("DOMContentLoaded", () => {
    //testing purposes
    window.videos = fetchVideos;
    window.video = fetchVideo;

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