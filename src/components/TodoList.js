// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = (props) => {
  return (
    <div className="todo_list">
      {props.todoArray.map((activities) => (
        <Todo
          key={activities.id}
          activity={activities}
          toggleActivity={props.toggleActivity}
        />
      ))}
      <div className="clear">
        <button className="buttons" onClick={props.clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
