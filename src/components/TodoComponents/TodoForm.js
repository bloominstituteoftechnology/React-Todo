import React from "react";

// This file will contain the input field,
// add todo and clear completed buttons


function TodoForm(props) {
  return (
  <form>
  <input
  value={props.inputText} onChange={props.handleInput}
  />
  <button onClick={props.addTodo}>Add Todo</button>
  <button onClick={props.clearCompleted}>Clear Completed</button>
  </form>
);
}

export default TodoForm;
