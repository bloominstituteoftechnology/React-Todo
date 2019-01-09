import React from 'react';

import './Todo.css';

const Todo = props => {
  return (
    <div className="todo-item">
      <h2 className="todo-item-header">Task:</h2>
      <p className="todo-item-details">{props.todoDetails}</p>
      <button className="todo-item-complete-btn">Mark as completed</button>
    </div>
  );
};

export default Todo;