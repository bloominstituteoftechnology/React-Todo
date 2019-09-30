import React from "react";

const Todo = props => {
  return (
    <div
      className={`item${props.item.done ? "done" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.content}</p>
    </div>
  );
};

export default Todo;