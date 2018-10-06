import React from "react";

const TodoForm = props => {
  return (
    <div className="todo-form-wrapper">
      <input
        name="item"
        type="text"
        onChange={props.onChange}
        value={props.item}
        placeholder="...todo"
      />
      <button onClick={props.onSubmit}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
