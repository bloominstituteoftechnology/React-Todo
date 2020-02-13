import React from "react";
import Todo from "../TodoComponents/Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  return (
    <div className="todolist">
      {props.todoItems.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearChecked}>
        Clear Todo Items
      </button>
    </div>
  );
};

export default TodoList;
