import React from "react";


const Todo = (props) => {
  const handleClick = (e) => {
    props.toggleItemDone(props.item.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`item${props.item.completed ? " done" : ""}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
