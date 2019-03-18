import React from "react";

const TodoForm = props => (
  <form>
    <input
      type="text"
      placeholder="what needs to be done?"
      name="todo"
      onChange={props.handleTodoChange}
      value={props.value}
    />
    <button onClick={props.handleAddTodo}>Add ToDo</button>
    <button onCLick={props.handleClearTodos}>Clear Completed</button>
  </form>
);
export default TodoForm;
