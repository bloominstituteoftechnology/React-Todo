import React from "react";
import "./Todo.css";
const todoForm = props => {
  return (
    <div className="TodoForm">
      <form action="">
        <input onChange={props.change} value={props.value}type="text" />
        <button onClick={props.submit}>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default todoForm;
