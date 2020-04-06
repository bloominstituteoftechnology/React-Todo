// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = ({ data }) => {
  return (
    <div>
      {data.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <button>clear all</button>
    </div>
  );
};

export default TodoList;
