import React from "react";

const Todo = props => {
  const { task, toggleComplete, id } = props;

  return <li onClick={() => toggleComplete(id)}>{task}</li>;
};

export default Todo;
