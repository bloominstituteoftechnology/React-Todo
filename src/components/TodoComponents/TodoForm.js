import React from "react";
import "./Todo.css";

const TodoForm = ({ task, handleTaskChange, addTodo, clearCompleted }) => {
  return (
    <form onSubmit={event => addTodo(event)} className="todo-form">
      <h3>Add Task</h3>
      <input
        name="task"
        type="text"
        placeholder="Enter new task"
        value={task}
        onChange={event => handleTaskChange(event)}
      />
      <div className="buttons">
        <button
          type="button"
          className="clear"
          onClick={() => clearCompleted()}
        >
          Clear Completed
        </button>
        <button className="add" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
