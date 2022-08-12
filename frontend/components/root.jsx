import React from "react";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import App from "./app";

//accepting the store as a prop and deconstructing it
const Root = ( {store} ) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;