import React from 'react';
import './Todo.css';

const Todo = (props) => {
  const completed = props.todo.completed ? ' completed' : '';

  return (
    <li className={'todo' + completed}
        id={props.todo.id}
        onClick={props.toggleCompleted}>
      {props.todo.task}
    </li>
  );
}

export default Todo;