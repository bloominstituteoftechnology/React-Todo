import React from "react";

const TodoForm = props => {
  return (
    <div className="todo-form">
      <input
        type="text"
        name="newTodo"
        placeholder="...todo"
        onChange={props.changeHandler}
        value={props.newTodo}
      />
      <button onClick={props.addNewTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
