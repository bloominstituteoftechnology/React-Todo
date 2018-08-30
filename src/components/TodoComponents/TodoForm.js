import React from "react";

function TodoForm(props) {
  return (
    <div className="todo-form-container">
      <form className="todo-form">
        <input
          className="todo-form-input"
          type="text"
          placeholder="Enter text"
          onChange={props.handleChange}
          value={props.value}
        />
        <button className="btn btn-sub" onClick={props.addTask}>
          Submit
        </button>
      </form>
      <button
        className="btn btn-clr"
        type="submit"
        onClick={props.clearCompletedTasks}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoForm;
