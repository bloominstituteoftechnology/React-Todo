import React from "react";

const Todo = (props) => {
  const onItemClick = () => {
    props.markTodoDone(props.data.id);
  };
  return (
    <div
      onClick={onItemClick}
      style={{ textDecoration: props.data.completed ? "line-through" : "none" }}
    >
      {props.data.task}
    </div>
  );
};

export default Todo;
