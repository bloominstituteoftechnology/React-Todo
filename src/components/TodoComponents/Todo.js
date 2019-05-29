import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <h3
      className={`${props.todo.completed ? "line" : false}`}
      onClick={() => props.toggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </h3>
  );
};

export default Todo;