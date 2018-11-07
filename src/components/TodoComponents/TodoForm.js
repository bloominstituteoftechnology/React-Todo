import React from "react";

const ToDoForm = props => {
  return (
    <form onSubmit={props.addToDo}>
      <input
        type="text"
        name="todoText"
        placeholder="add new todo"
        value={props.todoText}
        onChange={props.handleChange}
      />
      <button type="submit">Add ToDo</button>
      <button type="clear">Completed</button>
    </form>
  );
};

export default ToDoForm;
