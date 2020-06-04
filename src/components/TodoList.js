import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased); ---- > example
  return (
    <div className="task-list">
      {props.taskItems.map(item => (
          <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}

    </div>
  );
};

export default TodoList;
