// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
const todoList = props => {
//   
  return <>{props.todoData.map(element => (
    <Todo key={element.id} task={element.task} />
  ))}</>;
};

export default todoList;
