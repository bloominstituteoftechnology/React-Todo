import React from "react";

const Todo = props => {
  return (
    <div
      style={
        props.todo.completed
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
