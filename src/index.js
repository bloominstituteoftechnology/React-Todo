/*eslint no-unused-vars: "off"*/
/*eslint linebreak-style: ["error", "windows"]*/

//Create a file for the todo list
//Create a file for a  function to add items to an array
//Create a file 
import React from 'react';
import {render} from 'react-dom';
import App from './App';

require('!style-loader!css-loader!sass-loader!./index.scss');

render(<App/> ,  document.getElementById('root'));
