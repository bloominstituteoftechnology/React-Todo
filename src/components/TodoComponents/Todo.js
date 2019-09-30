import React from 'react';

const Todo = props => (
  <li>
    <input type='checkbox' id={props.todo.title} name={props.todo.title} />
    <label htmlFor={props.todo.title}>{props.todo.title}</label>
  </li>
);

export default Todo;
