import React from "react";

const Todo = props => {
  const handleClick = e => {
    props.toggleComplete(props.item.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`task${props.item.complete ? " complete" : ""}`}
    >
      <p className={props.item.isProcrastinating ? "procrastinating" : ""}>
        {props.item.task}
      </p>
    </div>
  );
};

export default Todo;
