import React from "react";

const TodoForm = props => {
  return (
    <div>
      <input
        type="text"
        name="formText"
        placeholder="...todo"
        onChange={props.formChange}
        value={props.formText}
      />
      <button onClick={props.addNewTodo}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
