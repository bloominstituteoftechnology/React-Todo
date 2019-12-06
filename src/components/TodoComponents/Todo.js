import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div
      className={props.item.completed ? "completed" : null}
      onClick={() => props.toggleItem(props.item.id)}
    >
      {props.item.name}
    </div>
  );
};

export default Todo;
