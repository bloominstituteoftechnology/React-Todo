import React from "react";
import "./Todo.css";
const Todo = props => {
  return (
    <div
      onClick={() => props.lineThrough(props.taskOnProps.id)}
      className={`task-header  ${props.taskOnProps.completed}`}
    >
      {props.taskOnProps.task}
    </div>
  );
};

export default Todo;