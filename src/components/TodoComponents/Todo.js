import React from "react";
import "./Todo.css";

const ToDo = props => {
  let classNames = "";
  if (props.completed) {
    classNames += "completed";
  }

  function updateCompletedTask() {
    props.toggleToComplete(props.task.id);
    console.log(props.completed);
  }

  return (
    <>
      <li
        className={classNames}
        completed={props.completed}
        onClick={updateCompletedTask}
      >
        {props.task.task}
      </li>
    </>
  );
};
export default ToDo;
