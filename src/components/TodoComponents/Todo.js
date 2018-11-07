import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div className="toDoContainer">
      {props.list.map(todo => (
        <h1>{todo}</h1>
      ))}
    </div>
  );
};

export default Todo;
