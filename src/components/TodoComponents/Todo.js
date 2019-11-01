import React from "react";

const Todo = props => {
  let verboseClassName = "job";
  if (props.job.completed) {
    verboseClassName = verboseClassName + "completed";
  }

  const handleClick = () => {
    props.toggleCompleted(props.job.id);
  };

  return (
    <div onClick={handleClick} className={verboseClassName}>
      <p>{props.job.task}</p>
    </div>
  );
};

export default Todo;
