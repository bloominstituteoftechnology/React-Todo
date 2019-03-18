import React from "react";

const Todo = props => {
  return (
    <ul
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </ul>
  );
};

export default Todo;
