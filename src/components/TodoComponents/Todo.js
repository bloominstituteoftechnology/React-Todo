import React from 'react';
import './Todo.css'

const ToDoItem = props => {
  return (
    <div className={`item${props.completed ? ' completed' : ''}`}>
      <p>{props.toDo}</p>
      <button onClick={props.onClick}>Task Complete</button>
    </div>
  );
};

export default ToDoItem;