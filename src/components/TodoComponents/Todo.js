import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <li
      onClick={() => props.toggleCompleted(props.todo.id)}
      className={props.todo.completed ? "completed" : null}
    >
      {props.todo.task}
    </li>
  );
}

export default Todo;
