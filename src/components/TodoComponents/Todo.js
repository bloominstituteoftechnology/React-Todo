import React from "react";

const Todo = props => {
  console.log(props);

  return (
    <div
      className={`Todo${props.task.completed ? " completed" : ""}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;