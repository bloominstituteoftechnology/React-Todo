import React from "react";
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="add todo"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <buton onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;