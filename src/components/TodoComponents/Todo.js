import React from "react";

function Todo(props) {
  return (
    <p
      className={`todo-list__item ${props.className}`}
      onClick={props.crossTodo}
    >
      {props.inputValue}
    </p>
  );
}

export default Todo;
