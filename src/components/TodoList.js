// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (

    <div className="todoList">
      <div className="todoListHolder">
        {props.toDo.map((item) => (
          <Todo
            key={item.id}
            item={item}
            toggleCompleted={props.toggleCompleted}
          />
        ))}
      </div>
      <div className="buttonHolder">
        <button className="removeButton" onClick={props.clearCompletedTasks}>
          Remove Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
