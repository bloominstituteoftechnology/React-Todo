import React from "react";
import "./todo.css"

export default function Todo(props) {
  const onClick = (e) => {
    props.handleToggle(props.item.id);
  };
  return (
    <div onClick={onClick} className={`item${props.item.done ? "done" : ""}`}>
      <p>{props.item.todo}</p>
    </div>
  );
}
