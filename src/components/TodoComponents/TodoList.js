// your components will all go in this `component` directory.
import React from "react";
import ToDoItem from "./Todo";

const ToDoList = props => {
  return (
    <div>
      {props.taskData.map(item => {
        return <ToDoItem task={item.task} />;
      })}
    </div>
  );
};

export default ToDoList;
