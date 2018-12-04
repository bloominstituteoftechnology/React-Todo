import React from "react";

const Todo = props => {
  return (
    <div
      className={`todo__item__text ${props.completed ? "line-through" : ""}`}
    >
      {props.task}
    </div>
  );
};

export default Todo;
