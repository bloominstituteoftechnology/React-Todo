import React from "react";

const Todo = props => {
  const { task, toggleComplete, id, completed } = props;

  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : null,
        curser: "pointer"
      }}
      onClick={() => toggleComplete(id)}
    >
      {task}
    </li>
  );
};

export default Todo;
