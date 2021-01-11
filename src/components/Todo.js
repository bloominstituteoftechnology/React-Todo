import React from "react";
import "./Todo.css";
export default function Todo(props) {
  const handleToggle = () => {
    props.handleCompleteToggle(props.task.id);
  };
  return (
    <div
      onClick={handleToggle}
      className={`task ${props.task.completed ? "completed" : ""}`}
    >
      <h3>{props.task.task}</h3>
    </div>
  );
}
