import React from "react";
import "./Todo.css";

const Todo = ({ todo, handleToggleTask }) => (
  <p
    onClick={() => handleToggleTask(todo.id)}
    className={todo.completed ? "task completed" : "task"}
  >
    {todo.task}
  </p>
);

export default Todo;
