import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Auth0Provider} from "@auth0/auth0-react"


const store= createStore(rootReducer, applyMiddleware(thunk, logger))

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_ID

ReactDOM.render(
    
    <Auth0Provider 
        domain = {domain}
        clientId = {clientId}
        redirectUri = {window.location.origin}
        store={store}
        >
        <App />
    </Auth0Provider>
,document.getElementById('root')
);
