import React from 'react';

import './Todo.css';

const Todo = props => {
  return (
    <div className="todo-item">
      <div className="todo-item-text">
        <h2 className="todo-item-header">Task:</h2>
        <p className="todo-item-details">{props.todoDetails}</p>
      </div>
      <button className="todo-item-complete-btn" data-button="toggle-completed" onClick={e => props.handleClick(e)}>Mark as completed</button>
    </div>
  );
};

export default Todo;