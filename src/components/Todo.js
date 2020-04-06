import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <p>{todo.task}</p>
    </div>
  );
};

export default Todo;
