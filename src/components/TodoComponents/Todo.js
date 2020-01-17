import React from "react";

const Todo = props => {
  let thing = "item";
  if (props.task.done) {
    thing = thing + "done";
  }

  const handleClick = () => {
    props.toggleTask(props.task.id);
  };

  return (
    <div onClick={handleClick} className={thing}>
      <p>{props.task}</p>
    </div>
  );
};

export default Todo;
