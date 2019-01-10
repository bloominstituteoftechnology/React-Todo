import React from 'react';

import './Todo.css';

const Todo = props => {
  return (
    <div 
      className={props.isCompleted ? "todo-item-done" : "todo-item"}
      data-id={props.id}
      onClick={props.handleClick} >
      <div className="todo-item-text">
        <h2 className="todo-item-header">{props.isCompleted ? "DONE" : "To Do:"}</h2>
        <div className="todo-item-date">{`Created: ${props.dateCreated}`}</div>
        <p className={props.isCompleted ? "todo-item-details-done" : "todo-item-details"}>{props.todoDetails}</p>
      </div>
    </div>
  );
};

export default Todo;