import React from "react";
import "./Todo.css";

const TodoForm = ({ task, handleTaskChange, addTodo, clearCompleted }) => {
  return (
    <form onSubmit={event => addTodo(event)} className="todo-form">
      <input
        name="task"
        value={task}
        onChange={event => handleTaskChange(event)}
      />
      <button type="submit">Add Todo</button>
      <button type="button" onClick={() => clearCompleted()}>
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
