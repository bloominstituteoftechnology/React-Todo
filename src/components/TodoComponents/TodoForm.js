import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input
        value={props.todo}
        onChange={props.handleInput}
        type="text"
        name="todo"
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
