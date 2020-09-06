import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div
      className="list"
      onClick={() => props.toggleActivity(props.activity.id)}
    >
      <p className={`activity ${props.activity.completed ? "completed" : ""}`}>
        {props.activity.activity}
      </p>
    </div>
  );
};

export default Todo;
