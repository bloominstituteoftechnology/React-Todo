import React from "react";

const Todo = (props) => {
  return (
    <div
      className={`todo${props.todo.done ? "done" : ""}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      <p>{props.todo.name}</p>
    </div>
  );
};

export default Todo;
