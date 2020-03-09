import React from "react";

const Todo = props => {
  console.log("Todo JS: ", props);

  return (
    <div
      className={`Todo${props.task.completed ? " completed" : ""}`}
      onClick={() => props.toggleComplete(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;