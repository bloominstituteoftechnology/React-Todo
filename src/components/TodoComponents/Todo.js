import React from "react";

const Todo = props => {
  return <div style={props.todo.completed ? { textDecoration:'line-through' } :null }>{props.task}</div>;
};

export default Todo;
