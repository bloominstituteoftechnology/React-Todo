import React from "react";

const ToDosList = props => {
  // This is "Reading" State
  return (
    <div className=".toDoList" onclick="console.log('The link was clicked.')">
      {props.toDos.map((toDo, index) => (
        <div key={toDo + index}>{toDo}</div>
      ))}
    </div>
  );
};

export default ToDosList;