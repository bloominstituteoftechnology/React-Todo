import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <Todo
      todo={props.todo}
      style={props.style}
      handleComplete={props.handleComplete}
    />
  );
};

export default TodoList;
