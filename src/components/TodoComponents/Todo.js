import React from 'react';

const Todo = props => (
  <li>
    <input
      type='checkbox'
      id={props.todo.title}
      name={props.todo.title}
      onClick={() => props.completeTodo(props.todo.id)}
    />
    <label htmlFor={props.todo.title}>{props.todo.title}</label>
  </li>
);

export default Todo;
