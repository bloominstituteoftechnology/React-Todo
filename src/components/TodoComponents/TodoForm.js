import React from "react";

const TodoForm = props => {
  return (
    <div className="todo-form">
      <input
        type="text"
        name="inputText"
        placeholder="...todo"
        onChange={props.changeHandler}
        value={props.inputText}
      />
      <button onClick={props.addNewTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
