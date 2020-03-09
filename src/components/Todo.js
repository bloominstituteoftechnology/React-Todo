import React from "react";

const Todo = props => {
  return (
    <div
      onClick={() => {
        props.toggleCompleted(props.task.id);
      }}
      className={`item${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
