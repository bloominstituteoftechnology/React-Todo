import React from "react";

const Todo = props => {
  const longDate = new Date(props.tag);
  const date = longDate.toString().substring(4, 15);

  return (
    <li
      className={`normal-todo ${props.complete ? "strike-through-todo" : null}`}
      onClick={() => props.completeHandler(props.tag)}
    >
      <span className='date-created'>{date}</span> {props.task}
    </li>
  );
};

export default Todo;
