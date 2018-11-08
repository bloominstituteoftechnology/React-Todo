import React, { Fragment } from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <Fragment>
      <li
        className="todo"
        completed={props.list.completed}
        onClick={props.onClick}
        id={props.list.id}
      >
        {props.list.task}
      </li>
    </Fragment>
  );
};

export default Todo;
