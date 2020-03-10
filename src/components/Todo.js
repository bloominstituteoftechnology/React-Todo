import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div
      key
      onClick={() => {
        props.toggleCompleted(props.item.id);
        console.log(props.item.completed);
      }}
      className={
        props.item.completed
          ? "completed"
          : ""
      }
    >
      {props.item.task}
    </div>
  );
};

export default Todo;
