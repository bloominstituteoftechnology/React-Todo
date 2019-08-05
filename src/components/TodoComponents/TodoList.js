import React from 'react';

import Todo from './Todo';

const ToDoList = props => {
  
  return (
    <div className="todo-list">
      {props.todos.map(item => (
        <Todo key={item.id} todo={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;

