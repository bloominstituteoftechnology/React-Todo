import React from "react";

const Todo = props => {
  // single-responsibility principle: Display a single band.
  return (
    <div>
      {props.singleTodo.task}
    </div>
  );
};

export default Todo;