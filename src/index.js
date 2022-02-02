import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import adminReducer from "./reducers/adminReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const store = createStore( adminReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store} >
    <Auth0Provider 
        domain = { domain }
        clientId = { clientId }
        redirectUri = { window.location.origin }>
        <App />
    </Auth0Provider>
  </Provider>,   
  document.getElementById('root')
);

