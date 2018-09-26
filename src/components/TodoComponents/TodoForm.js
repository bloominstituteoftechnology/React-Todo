import React from "react";

const TodoForm = (props) => {
  return(
  <form>
    Todo:{" "}
    <input
      type="text"
      placeholder="get milk"
      value={props.value}
      onChange={props.handleInput}
    />
    <input type="submit" onClick={props.handleSubmit} />
  </form>);
};

export default TodoForm;
