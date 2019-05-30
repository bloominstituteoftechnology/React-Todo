import React from "react";
import "./Todo.css";

const Todo = ({ todo, handleToggleTask }) => (
  <p
    onClick={() => handleToggleTask(todo.id)}
    className={todo.completed ? "completed" : ""}
  >
    {todo.task}
  </p>
);

export default Todo;
