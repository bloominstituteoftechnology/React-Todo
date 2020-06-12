import React from "react";
import "./Todo.css";

const Todo = (props) => {
  console.log("LT: Todo.js props", props);

  const handleClick = (e) => {
    props.toggleTodo(props.todo.id);
  };
  return (
    <div
      key={props.todo.id}
      onClick={handleClick}
      className={`task ${props.todo.completed ? "completed" : ""}`}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
