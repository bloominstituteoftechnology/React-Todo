// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

function TodoList(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.todo.task}</h3>
      <h3>{props.todo.id}</h3>
      <h3>{props.todo.completed}</h3>
    </div>
  );
}

export default TodoList;
