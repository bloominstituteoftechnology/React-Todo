import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
        onKeyUp={props.handleInputEnter}
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear</button>
    </form>
  );
};

export default TodoForm;
