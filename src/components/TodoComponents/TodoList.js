import React from "react";
import ToDo from "./Todo.js";

function ToDoList(props) {
  return <ul>{props.todos.map(todo => <ToDo todo={todo} />)}</ul>;
}

export default ToDoList;
