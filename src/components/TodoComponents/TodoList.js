import React from 'react';

import Todo from './Todo';

const TodoList = props => {

  return (
    <div className="todo-list">
      {props.items.map(item => (
        <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted}/>
      ))}
      <button className="clear-btn" onClick={props.filterCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;