import React from "react";

const TodoForm = props => {
  return (
    <form className="form">
      <input value={props.inputField} onChange={props.messageChangeHandler} />
      <button onClick={props.clickHandler}>Add Todo</button>
      <button onClick={props.clearClickHandler}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
