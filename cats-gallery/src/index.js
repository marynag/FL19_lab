import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {applyMiddleware, createStore} from "redux";
import { rootReducer } from "./store";
import { Provider } from "react-redux";
import {getBreeds} from "./store/breeds/thunk";
import {BrowserRouter as Router} from "react-router-dom";

//TODO: restucture files according to redux thunk architecture
const asyncFunctionMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    return next(action);
};


const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);
const store = createStore(rootReducer, middlewareEnhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(getBreeds());

root.render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
);

