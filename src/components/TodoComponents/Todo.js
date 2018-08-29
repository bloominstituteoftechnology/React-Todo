import React from "react";

function Todo(props) {
  return <li className="todo-item">{props.todo}</li>;
}

export default Todo;