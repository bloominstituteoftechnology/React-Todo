import React from "react";

const ToDo = props => {
  return (
    <h1
      onClick={() => props.strikeThru(props.todo.id)}
      className="heading"
      style={{ textDecoration: props.todo.strike }}
    >
      {props.todo.task}
    </h1>
  );
};

export default ToDo;
