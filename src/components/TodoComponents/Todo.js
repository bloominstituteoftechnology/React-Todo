import React from "react";
import './Todo.css';

const Todo = props => {
  return (
    <p className="list-text">{props.toDoItem.task}</p>
  );
};

export default Todo;
