// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import "./Todo.css";

import Todo from "./Todo";

const TodoList = props => {
  let todoArray = props.todoArray;
  return (
    <div>
      {todoArray.map(task => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          todoDataProp={task}
          key={task.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
