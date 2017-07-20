/*eslint no-unused-vars: "off"*/

import React from 'react';
import ReactDom from 'react-dom';

import ToDoClass from './toDoList'

require('!style-loader!css-loader!sass-loader!./index.scss');

// ReactDom.render(<div>Hello World!</div>, document.getElementById('root'));
ReactDom.render(<ToDoClass />, document.getElementById('root'));
