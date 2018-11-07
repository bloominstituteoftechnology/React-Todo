import React, { Fragment } from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <div className="form-component">
      <input type="text" placeholder="...todo" onChange={props.onChange} />
      <button type="submit" onClick={props.onClick}>
        Add Todo
      </button>
      <button type="submit">Clear Completed</button>
    </div>
  );
};

export default TodoForm;
