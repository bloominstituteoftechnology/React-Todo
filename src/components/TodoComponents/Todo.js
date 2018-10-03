import React from "react";
const Todo = ({ task, id, completed, completeTodo }) => (
  <p
    onClick={() => completeTodo(id)}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {task}
  </p>
);
export default Todo;
