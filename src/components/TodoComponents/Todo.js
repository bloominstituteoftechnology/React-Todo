import React from "react";

const Todo = props => {
  console.log(props.item.complete);
  const handleClick = e => {
    props.toggleComplete(props.item.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`task${props.item.complete ? " complete" : ""}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
