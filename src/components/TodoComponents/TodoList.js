// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Item from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="list">
      {props.todo.map(item => (
        <Item
          key={item.id}
          item={item}
          toggleDone={props.toggleDone}
        />
      ))}
      <button className="clear-btn" onClick = {props.deleteItem}>
        click here If you've done the do's and they've become the did's
      </button>
    </div>
  );
};

export default TodoList;