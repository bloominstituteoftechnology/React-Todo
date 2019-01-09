import React from "react";

const TodoForm = ({ inputText, submitHandler, onChangeHandler }) => (
  <form onSubmit={submitHandler}>
    <input
      type="text"
      name="inputText"
      value={inputText}
      onChange={onChangeHandler}
    />
    <button type="submit">submit</button>
  </form>
);

export default TodoForm;
