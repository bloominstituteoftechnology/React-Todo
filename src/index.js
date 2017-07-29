/*eslint no-unused-vars: "off"*/
import React, {Component} from 'react';
import {render} from 'react-dom';
require('!style-loader!css-loader!sass-loader!./index.scss');
import App from './components/App';

render(<App />, document.getElementById('root'));
