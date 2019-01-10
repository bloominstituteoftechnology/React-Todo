import React from "react";

const Todo = props => {
  const { task, completed, key } = props;

  return (
    <ul>
      <li>{task}</li>
    </ul>
  );
};

export default Todo;
