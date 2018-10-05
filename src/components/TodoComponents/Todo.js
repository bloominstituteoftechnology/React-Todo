import React from 'react';
import './Todo.css';

const Todo = props => (
  <div
    style={props.todo.completed ? props.inlineStyle : null}
    className={props.style}
    id={props.todo.id}
    onClick={props.toggleCompleteTask}
  >
    {props.todo.task}
  </div>
);

export default Todo;
