import React from "react";

function Todo(props) {
  return (
    <p
      className={`todo-list-item ${props.className}`}
      onClick={props.crossTask}
    >
      {props.inputValue}
    </p>
  );
}

export default Todo;
