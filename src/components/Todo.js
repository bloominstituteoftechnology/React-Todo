import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="toggle-item"
      onClick={() => props.toggleItem(props.item.id)}
      style={props.item.completed ? { textDecoration: "line-through" } : null}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;