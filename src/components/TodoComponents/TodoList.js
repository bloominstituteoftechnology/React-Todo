import React from "react";
import Todo from "./Todo"
import "./Todo.css";

const TodoList = props => {
  return (
    <div className="outputList">
      <Todo />
    </div>
  );
};

export default TodoList;
