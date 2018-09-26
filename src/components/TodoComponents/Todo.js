import React from "react";

const Todo = props => {
  console.log(props);

  return (
    <div key={props.id}>
      <h2>{props.task}</h2>
    </div>
  );
};

export default Todo;
