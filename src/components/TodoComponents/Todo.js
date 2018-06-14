import React from 'react';

const Todo = props => {
  return (
    <li className={props.completed ? "completed" : ""}onClick={() => props.handler(props.id)}>{props.task}</li>
  );
}

export default Todo;
