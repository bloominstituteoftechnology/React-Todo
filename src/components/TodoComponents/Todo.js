import React from "react";

const Todo = props => {
  return (
    <div
      className={`task${props.task.completed ? "-done" : ""}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      {props.task.task}
    </div>
  );
};

export default Todo;
