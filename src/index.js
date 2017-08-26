/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import ToDoList from './to_do_components/todoList';

require('!style-loader!css-loader!sass-loader!./index.scss');

ReactDom.render(<ToDoList />, document.getElementById('root'));
