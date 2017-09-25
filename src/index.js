/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
require('!style-loader!css-loader!sass-loader!./index.scss');

ReactDom.render(
    <div>
        <App/>
    </div>, document.getElementById('root'));
