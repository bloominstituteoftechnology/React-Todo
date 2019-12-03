import React from "react";

const Todo = props => {
  return (
    <div
      className={`item${props.item.done ? " done" : ``}`}
      onClick={() => props.toggleDone(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
