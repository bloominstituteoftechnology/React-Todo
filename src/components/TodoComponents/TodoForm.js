import React from "react";

const Form = props => {
  return (
    <form>
      <input value={props.newTodo} onChange={props.changeHandler} type="text" placeholder="Add todo. . ." />
      <button type="submit" onClick={props.addNewTodo}>
        Add Todo
      </button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};
export default Form;
