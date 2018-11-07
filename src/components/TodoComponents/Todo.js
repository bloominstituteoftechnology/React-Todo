import React, { Fragment } from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <Fragment>
      <p id={props.list.id} completed={props.list.completed}>
        {props.list.task}
      </p>
    </Fragment>
  );
};

export default Todo;
