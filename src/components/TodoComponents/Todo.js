import React from 'react';
import './Todo.css';

const Todo = props => (
  <div
    style={props.inlineStyle}
    className={props.style}
    id={props.id}
    onClick={props.toggleCompleteTask}
  >
    {props.task}
  </div>
);

export default Todo;
