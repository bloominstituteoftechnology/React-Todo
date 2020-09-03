import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleActivity(props.activity.key)}
      //   className={`activity ${props.activity.completed ? "completed!" : ""}`}
    >
      <p>{props.activity.name}</p>
    </div>
  );
};

export default Todo;
