import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div
      className={`Chore ${props.item.completed ? "completed" : ""}`}
      onClick={() => props.toggleTodo(props.item.id)}
    >
      <p>
        <span className="counter badge-pill badge-danger p-1">
          {props.index}
        </span>
        {props.item.task}
      </p>
    </div>
  );
};

export default Todo;
