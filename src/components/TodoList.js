// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Item from "./Item";

const ToDoList = props => {
  return (
    <div className="ToDoList">
      {props.ToDos.map(item => (
        <Item
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button className="clear-button" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
