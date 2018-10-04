import React from "react";

const Todo = props => {
  return <h3 onClick={() => props.isCompleted(props)}>{props.task.task}</h3>;
};

export default Todo;
