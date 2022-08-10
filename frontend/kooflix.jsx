import React from 'react';
import ReactDOM from 'react-dom';
import { postUser, postSession, deleteSession } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    window.signup = postUser;
    window.login = postSession;
    window.logout = deleteSession;

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to KooFlix</h1>, root);
})