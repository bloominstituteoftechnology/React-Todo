// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
function TodoList(props) {
  return (
    <ul>
      {props.tasks.map((taskFromMap, index) => (
        <Todo key={index} task={taskFromMap} />
      ))}
    </ul>
  );
}

export default TodoList;
