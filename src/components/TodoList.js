import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todo-list">
      {props.data.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleDone={props.toggleDone}
        />
      ))}
      <button className="clear-btn" onClick={props.clearTasks}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TodoList;
