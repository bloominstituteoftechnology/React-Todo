import React from "react";

function Todo(props) {
  return (
    <li
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </li>
  );
}

export default Todo;
