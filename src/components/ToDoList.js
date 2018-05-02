import React from "react";

const ToDoList = props => {
  return (
    <ul>
      {props.tasks.map(task => {
        return <li key={task.id}>{task.name}</li>;
      })}
    </ul>
  );
};

export default ToDoList;