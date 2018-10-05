import React from "react";

const TodoForm = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.addNewTodo} type="submit">
        <input
          type="text"
          name="formText"
          placeholder="add new todo"
          onChange={props.formChange}
          value={props.formText}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={props.clearCompleted} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;
