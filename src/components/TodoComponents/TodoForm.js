import React from "react";

const TodoForm = (props) => {
  return(
  <form className='todo-form-enter'>
    Todo:{" "}
    <input
      className='todo-text-enter'
      type="text"
      placeholder="get milk"
      value={props.value}
      onChange={props.handleInput}
    />
    <input className='todo-submit' type="submit" onClick={props.handleSubmit} />
  </form>);
};

export default TodoForm;
