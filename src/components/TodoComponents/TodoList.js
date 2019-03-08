// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => (
  <div>
    <Todo
      newList={props.newList}
      toggleTodo={props.toggleItem}
      emptyInputDiable={props.emptyInputDiable}
    />
  </div>
);

export default TodoList;
