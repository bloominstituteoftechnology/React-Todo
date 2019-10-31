import React from "react";

const Todo = props => {
  console.log(props.item.id);
  const handleClick = e => {
    props.toggleComplete(props.item.id);
  };
  return (
    <div onClick={handleClick}>
      <p>I'm from Todo!</p>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
