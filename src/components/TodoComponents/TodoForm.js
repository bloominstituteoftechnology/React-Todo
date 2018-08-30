import React from "react";

function TodoForm(props) {
  return (
    <div className="todo-form-container">
      <form className="todo-form" action="submit" onSubmit={props.addTodo}>
        <input
          className="todo-form__input"
          type="text"
          placeholder="Enter text"
          onChange={props.handleChange}
          value={props.value}
          required
        />
        <button className="btn btn-sub" type="submit">
          Submit
        </button>
      </form>
      <button
        className="btn btn-clr"
        type="submit"
        onClick={props.clearCompletedTodos}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoForm;
