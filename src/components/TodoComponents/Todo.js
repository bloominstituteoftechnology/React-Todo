import React from "react";

// Takes in data from tasks array and displays to screen
const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? " completed" : " "}`}
      onClick={e => props.toggleTask(props.item.id)}
    >
      {props.item.taskName}
    </div>
  );
};

export default Todo;
