// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.todos.map(item => {
        console.log("todo item", item);
        return <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
})}
      <button className="clear-btn" onClick={props.clearComplete}>
        Clear Purchased
      </button>
    </div>
  );
};

export default TodoList;
