import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleActivity(props.activity.id)}
      //   className={`activity ${props.activity.completed ? "completed!" : ""}`}
    >
      <p>{props.activity.activity}</p>
    </div>
  );
};

export default Todo;
