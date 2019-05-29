// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
const todoList = props => {
  const output = props.todoData.map(element => (
    <Todo key={element.id} task={element.task} />
  ));
  return <>{output}</>;
};

export default todoList;
