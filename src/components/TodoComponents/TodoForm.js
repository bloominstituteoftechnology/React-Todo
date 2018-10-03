import React, { Fragment } from "react";

const TodoForm = ({
  handleChange,
  handleSubmit,
  removeCompletedTodos,
  value
}) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">add todo</button>
      <button type="submit" onClick={removeCompletedTodos}>
        clear completed
      </button>
    </form>
  </Fragment>
);
export default TodoForm;
