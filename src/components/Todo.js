import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleTask(props.task.id)}
      className={`todo${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
