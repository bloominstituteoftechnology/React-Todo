import React from 'react';

const Todo = props => {
  return (
    <li className={props.completed ? `todo-item ${props.color} completed` : `todo-item ${props.color}`}
        onClick={() => props.handler(props.id)}>{props.task}</li>
  );
}

export default Todo;
