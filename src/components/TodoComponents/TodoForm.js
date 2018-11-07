import React from "react";
import './Todo.css';
const TodoForm = props => {
  return (
    <React.Fragment>
      <form onSubmit={props.addItem}>
        <input
          type="text"
          name="inputText"
          placeholder="Add New Todo"
          value={props.inputText}
          onChange={props.handleChange}
        />
        <button type="submit">Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </React.Fragment>
  );
};

export default TodoForm;
