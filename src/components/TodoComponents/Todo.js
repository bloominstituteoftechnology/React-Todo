import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div className={props.completed ? "line-through" : ""}>{props.task}</div>
  );
};

export default Todo;
