import React from "react";
import './Todo.css'
function Todo(props) {
  console.log(props.taskRead);

  return <li onClick={props.cross}>{props.taskRead}</li>;
}

export default Todo
