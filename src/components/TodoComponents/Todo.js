import React from 'react';

import './Todo.css';

const Todo = props => {
  return (
    <div className="todo-item">
      <div className="todo-item-text">
        <h2 className="todo-item-header">{props.isCompleted ? "DONE" : "To Do:"}</h2>
        <p className="todo-item-details">{props.todoDetails}</p>
      </div>
      <button className="todo-item-complete-btn" data-id={props.id} data-button="toggle-completed" onClick={e => props.handleClick(e)}>{`${props.isCompleted ? "Unmark" : "Mark"} completed`}</button>
    </div>
  );
};

export default Todo;