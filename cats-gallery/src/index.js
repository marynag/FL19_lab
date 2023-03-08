import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {applyMiddleware, createStore} from "redux";
import { rootReducer } from "./store";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import thunk from "redux-thunk";
import {getBreeds} from "./components/requests/requests.utils";

//TODO: restucture files according to redux thunk architecture
const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(getBreeds());

root.render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
);

