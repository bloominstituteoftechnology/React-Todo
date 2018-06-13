import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        onChange={props.changeTodoInput}
        placeholder="...todo"
        value={props.todoInput}
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button>Clear completed</button>
    </form>
  );
};

export default TodoForm;
