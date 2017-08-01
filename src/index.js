/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import App from './App'; // Execute App.js (assumes .js).

require('!style-loader!css-loader!sass-loader!./index.scss');

ReactDom.render(<App />, document.getElementById('root')); // Render my JSX to a div in my HTML with the ID of root.
