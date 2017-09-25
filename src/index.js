/*eslint no-unused-vars: "off"*/
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import TodoApp from './components/TodoApp';

require('!style-loader!css-loader!sass-loader!./index.scss');

ReactDom.render(<TodoApp />, document.getElementById('root'));
