/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

require('!style-loader!css-loader!sass-loader!./Styles/index.scss');

ReactDom.render(<App/>, document.getElementById('root'));
