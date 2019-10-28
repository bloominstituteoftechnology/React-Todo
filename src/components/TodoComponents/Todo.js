import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div
      className={`task${props.task.completed ? ' purchased' : ''}`}
    >
      <p>{props.task.name}</p>
    </div>
  );
}

export default Todo;