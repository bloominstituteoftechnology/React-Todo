import React from "react";
import Todo from "./Todo.js";

function TodoList(props) {
  return <ul>{props.task.map(tasks => <Todo task ={task} />)}</ul>;
}

export default TodoList;
