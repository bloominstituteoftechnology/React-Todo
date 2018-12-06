import React from "react";

function Todo(props) {
  return (
    <li onClick={() => props.toggleCompleted(props.todo.task.id)}>
      {props.todo.task}
    </li>
  );
}

export default Todo;
