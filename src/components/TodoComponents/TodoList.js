// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

const TodoList = props => {
  return <h1>{props.propsMessage}</h1>;
};

export default TodoList;