// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";


const GroceryList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  console.log(props);
  return (
    <div className="shopping-list">
      {props.LearReactClass.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default GroceryList;
