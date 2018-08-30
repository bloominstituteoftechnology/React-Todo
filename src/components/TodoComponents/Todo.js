import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <li className={'todo ' + props.todo.completed}
        id={props.todo.id}
        onClick={props.completedToggle}>
      {props.todo.task}
    </li>
  );
}

export default Todo;