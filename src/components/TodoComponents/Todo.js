import React from 'react';

import './Todo.css';

const Todo = props => {
  return (
    <div className="todo-item">
      <div className="todo-item-text">
        <h2 className="todo-item-header">{props.isCompleted ? "DONE" : "To Do:"}</h2>
        <div className="todo-item-date">{`Created: ${props.dateCreated}`}</div>
        <p className={props.isCompleted ? "todo-item-details-done" : "todo-item-details"}>{props.todoDetails}</p>
      </div>
      <button 
        className="todo-item-complete-btn"  
        name="toggle-completed" 
        data-id={props.id}
        onClick={props.handleClick}>
        {`${props.isCompleted ? "Unmark" : "Mark"} completed`}
      </button>
    </div>
  );
};

export default Todo;