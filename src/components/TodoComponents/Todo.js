import React from "react";
import "./Todo.css";
const Todo = props => {
  return (
    <div
      className={`item${props.item.done ? " done" : ``}`}
      onClick={() => props.toggleDone(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;