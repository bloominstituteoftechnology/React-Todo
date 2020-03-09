import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleCompleted(props.item.id)}
      className={`item${props.item.completed ? ' completed' : ''}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
