import React from 'react';

const Todo = props => {
  return (
    <li>
      Task: {props.task}<br>
        ID: {props.id}</br>
      Completed: {props.completed}<br>
      </li>
  );
}

export default Todo;
