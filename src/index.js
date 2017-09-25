/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
// Main app
import App from './components/App';

require('!style-loader!css-loader!sass-loader!./index.scss');

ReactDom.render(<App />, document.getElementById('root'));
