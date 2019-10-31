import React from "react";

const Todo = props => {
  console.log(props.item);
  return (
    <div>
      <p>I'm from Todo!</p>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
