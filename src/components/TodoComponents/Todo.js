import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <li
      style={props.completed ? { textDecoration: "line-through" } : null}
      class={`todo ${props.task}`}
      onClick={() => props.itemCompleted(props.id)}
    >
      {props.task}
    </li>
  );
};

export default Todo;
