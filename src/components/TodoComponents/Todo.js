import React from "react";
import "./Todo.css";

const Todo = props => {
  //   console.log(props);
  return (
    <h3
      onClick={() => props.isCompleted(props)}
      // className={`${props.task.line}`}
      className={props.task.completed === true ? "completed" : ""}
    >
      {props.task.task}
    </h3>
  );
};

export default Todo;
