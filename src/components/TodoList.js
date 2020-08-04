// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  // for sorting the list based on whether an item has been purchased or not

  return (
    <div className="App">
      {console.log("I am props.toggleItem in TodoList.js", props.toggleItem)}
      {props.todos.map((item) => {
        return <Todo key={item.id} item={item} toggleItem={props.toggleItem} />;
      })}
      {console.log("I am props.deleted", props.deleteCompleted)}
      <button className="clear-btn" onClick={props.deleteCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
