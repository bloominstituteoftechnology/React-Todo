// Takes in data from tasks array and displays to screen
import React from "react";

const Todo = props => {
  return (
    <div className={`item${props.item.completed ? " completed" : " "}`}>
      {props.item.taskName}
    </div>
  );
};

export default Todo;
