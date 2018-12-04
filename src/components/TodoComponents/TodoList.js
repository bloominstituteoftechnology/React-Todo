// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const ToDoList = props => {
  return (
    <ul>
      {" "}
      {props.currentToDo.map(task => {
        return <li key={Math.random()}>{task}</li>;
      })}
    </ul>
  );
};

export default ToDoList;
