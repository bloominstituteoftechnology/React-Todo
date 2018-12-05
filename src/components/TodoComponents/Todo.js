import React from "react";

const Todo = props => {
    const { task } = props.todoProp;
  return (
    <div>{task}</div>
  );
}

export default Todo;