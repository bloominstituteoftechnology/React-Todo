import React from "react";

const TodoList = props => {
  let verboseClassName = "item";
  if (props.item.completed) {
    verboseClassName = verboseClassName + " completed";
  }

  const handleClick = () => {
    props.toggleCompleted(props.item.id);
  };

  return (
    <div onClick={handleClick} className={verboseClassName}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default TodoList; 

