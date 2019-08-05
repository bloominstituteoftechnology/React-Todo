import React from "react";

const Todo = props => {
  return (
    <div>
      <div>{props.task.task}</div>
    </div>
  );
};

export default Todo;
