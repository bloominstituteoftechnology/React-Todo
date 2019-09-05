import React from "react";
import "./Todo.css";

const Todo = props => {
  console.log(props.task);
  return (
    <div
      className={`task${props.task.completed ? " completed" : ""}`}
      onClick={() => {
        props.toggleTask(props.task.id);
      }}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
