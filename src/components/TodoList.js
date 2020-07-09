// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//import Todo from './components/Todo';

import React from 'react';

import Item from './Todo';

const TaskList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.task.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TaskList;