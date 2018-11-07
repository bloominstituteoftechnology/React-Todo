import React from "react";

const ToDoForm = props => {
  return (
    <form onSubmit={props.addToDo}>
      <input
        className="form"
        type="text"
        name="todoText"
        placeholder="add new todo"
        value={props.todoText}
        onChange={props.handleChange}
      />
      <button className="submit" type="submit">
        Add ToDo
      </button>
      <button className="completed" type="clear">
        Completed
      </button>
    </form>
  );
};

export default ToDoForm;
