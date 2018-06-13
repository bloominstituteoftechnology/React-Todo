import React from "react";

const TodoForm = props => {
  return (
    <div>
      <input
        type="text"
        onChange={props.changeTodoInput}
        placeholder="...todo"
        value={props.todoInput}
      />
      <button onSubmit={props.addTodo}>Add Todo</button>
      <button>Clear completed</button>
    </div>
  );
};

export default TodoForm;
