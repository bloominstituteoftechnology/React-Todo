import React from "react";
import Todo from "./Todo.js";

function TodoList(props) {
  return <ul>{props.tasks.map(task => <Todo task ={task} />)}</ul>;
}

export default TodoList;
