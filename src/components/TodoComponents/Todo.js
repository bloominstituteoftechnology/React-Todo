import React from "react";


const Todo = props => {
  let verboseClassName = "task";
  if (props.task.done) {
    verboseClassName = verboseClassName + " done";
  }

  const handleClick = () => {
    props.toggleDone(props.task.id);
  };

  //<div className={`item${props.item.purchased ? ' purchased' : ''}`}>
  return (
    <div onClick={handleClick} className={verboseClassName}>
      <p>{props.task.name}</p>
    </div>
  );
};

export default Todo;