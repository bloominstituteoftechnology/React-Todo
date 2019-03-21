// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";

function TodoList(props) {
  //console.log(props);
  return (
    <div className="todo-list">
      <ul className="new-task">{props.todo.task}</ul>
    </div>
  );
}

export default TodoList;
