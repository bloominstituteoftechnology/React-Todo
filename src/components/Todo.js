import React from 'react';
import "./Todo.css"

const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>

  );
};

export default Todo;
