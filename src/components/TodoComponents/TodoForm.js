import React from "react";
import "./Todo.css";

const TodoForm = () => {
  return (
    <form className="todo-form">
      <input name="task" value="" />
      <button type="submit">Add Todo</button>
      <button type="button">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
