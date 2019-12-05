import React from "react";

const TodoList = props => {
  let verboseClassName = "item";
  if (props.item.purchased) {
    verboseClassName = verboseClassName + " purchased";
  }

  const handleClick = () => {
    props.togglePurchased(props.item.id);
  };

  return (
    <div onClick={handleClick} className={verboseClassName}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default TodoList; 

