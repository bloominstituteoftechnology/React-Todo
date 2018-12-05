// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const ToDoList = props => {
  return (
    <div>
      {" "}
      {props.currentToDo.map(task => {
        return <div onClick = {event => { event.target.classList.toggle('todoitem')}} key={Math.random()}>{task}</div>;
      })}
    </div>
  );
};

export default ToDoList;
