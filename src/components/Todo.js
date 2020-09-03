import React from "react";

import "./Todo.css";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleItem(props.item.id)}
      className={`item${props.item.completed ? " completed" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
