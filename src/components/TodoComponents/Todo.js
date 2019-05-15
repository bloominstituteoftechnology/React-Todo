// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";

const Todo = props => {
  const { key, todo, clickHandler } = props;

  return (
    <div onClick={clickHandler} data-key="key">
        <p>{todo}</p>
    </div>
  );
};

export default Todo;
