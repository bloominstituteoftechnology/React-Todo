// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

function TodoList(props) {
  return <h3>{props.todoProp.todoItem}</h3>;
}

export default TodoList;
