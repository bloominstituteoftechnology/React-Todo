import React from "react";

const TodoForm = props => {
  return (
    <React.Fragment>
      <form onSubmit={props.addNewTodo} type="submit">
        <input
          type="text"
          name="formText"
          placeholder="...todo"
          onChange={props.formChange}
          value={props.formText}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </React.Fragment>
  );
};

export default TodoForm;
