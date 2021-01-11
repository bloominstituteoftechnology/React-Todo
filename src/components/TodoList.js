// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./TodoList.css"

export default function TodoList(props) {
  const handleClear = () => {
    props.handleClearCompleted();
  };
  return (
    <div>
      <button onClick={handleClear}>Clear Completed</button>
      {props.list.map((task) => {
        return (
          <Todo task={task} handleCompleteToggle={props.handleCompleteToggle} />
        );
      })}
    </div>
  );
}
