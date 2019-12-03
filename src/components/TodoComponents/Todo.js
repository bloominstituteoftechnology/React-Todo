import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleCompleted(props.item.id)}
    >
      <h2 className="task">{props.item.task}</h2>
    </div>
  );
};
export default Todo;
