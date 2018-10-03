import React from "react";

const TodoForm = props => (
  <form onSubmit={props.handleNewToDo}>
    <input
      type="text"
      placeholder="...todo"
      onChange={props.handleInputChange}
    />
    <button className="add" type="submit" onClick={props.handleNewToDo}>Add Todo</button>
    <button className="clear">Clear Completed</button>
  </form>
);

export default TodoForm;
