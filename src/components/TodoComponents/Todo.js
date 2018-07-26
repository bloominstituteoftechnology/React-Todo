import React from "react";
import "./Todo.css";

const Todo = props => {
  const {task}  = props.todoDataProp;
  return (
    <div
        style={props.todoDataProp.completed ? {textDecoration: 'line-through'} : null}
        onClick={() => props.handleToggleComplete(props.todoDataProp.id)}
    >
      <h4>Name: {task}</h4>
    </div>
  );
};

export default Todo;
