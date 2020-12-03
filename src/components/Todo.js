import React from "react";

function Todo(props) {
  return (
    <div
      className={`task ${props.item.completed ? "done" : ""} `}
      onClick={() => props.toggleCompleted(props.item.id)}
    >
      <h2>{props.item.task}</h2>
      <p>Status: {props.item.completed ? <span className="completed">Completed</span> : <span className="incomplete">Incomplete</span>}</p>
    </div>
  );
}

export default Todo;
