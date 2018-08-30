import React from 'react';
import './Todo.css';

function Todo(props) {
  return (
    <li onClick={props.toggleComplete} id={props.todo.id}>
      {props.todo.task}
    </li>
  );
}

export default Todo;
