import React from 'react';

import Todo from './Todo';

const TodoList = props => {

  return (
    <div className="todo-list">
      {props.items.map(item => (
        <Todo key={item.id} item={item} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;