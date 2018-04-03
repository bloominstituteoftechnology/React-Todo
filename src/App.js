
import React from "react";

const ToDoList = props => {
  // This is "Reading" State
  return (
    <div>
      <h1>{props.newToDo}</h1>
      {props.toDo.map((toDo, index) => (
        <div key={toDo + index}>{toDo}</div>
      ))}
    </div>
  );
};

export default ToDoList;
