import React from "react";

const Todo = (props) => {
  const handleClick = (e) => {
    props.toogleCompleted(props.item.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`item ${props.item.completed ? "completed" : ""}`}
    >
      {console.log(props.item)}
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
