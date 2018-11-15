import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <h1
      onClick={() => props.changeCompleted(props.itemOnProps.id)}
      className={`item-header ${props.itemOnProps.completed}`}
    >
      {props.itemOnProps.task}
    </h1>
  );
};

export default Todo;
