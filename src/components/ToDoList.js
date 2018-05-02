import React from "react";

const ToDoList = props => {
  return (
    <ul className = "unorderedList">
      {props.tasks.map(task => {
        return <li className = 'listItem' key={task.id}>{task.name}</li>;
      })}
    </ul>
  );
};

export default ToDoList;