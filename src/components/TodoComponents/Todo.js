import React from "react";
import "./Todo.css";

export default function Todo(props) {
  let completed = props.newList.completed ? "completed" : "";

  return (
    <div
      className={`task ${completed}`}
      key={props.id}
      onClick={event => {
        props.toggleTodo(props.newList.id);
      }}
    >
      <p> {props.newList.task}</p>
    </div>
  );
}
