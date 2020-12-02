import React from "react";

function Todo(props) {
  return (
    <div
      className={`task ${props.item.completed ? "done" : ""} `}
    //   onClick={() => props.toggleCompleted(props.item.id)}
    >
      <h2>{props.item.name}</h2>
      <p>{`Completed: ${props.item.completed}`}</p>
    </div>
  );
}

export default Todo;
