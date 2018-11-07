import React, { Fragment } from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <Fragment>
      <p
        className="todo"
        completed={props.list.completed}
        onClick={props.onClick}
      >
        {props.list.task}
      </p>
    </Fragment>
  );
};

export default Todo;
