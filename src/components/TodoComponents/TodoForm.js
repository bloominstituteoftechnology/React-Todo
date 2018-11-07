import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form onSubmit={props.addItem}>
      <input
        name="inputText"
        type="text"
        placeholder="...todo"
        value={props.inputText}
        onChange={props.handleChange}
      />
      <button type="submit">Add Todo</button>
      <button name="clear" type="submit" onClick={props.clearHandler}>
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
