import React from "react";

const Todo = props => {
  const { task, toggleComplete, id, completed } = props;

  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : null
      }}
      onClick={() => toggleComplete(id)}
    >
      {task}
    </li>
  );
};

export default Todo;
