import React from "react";

const Todo = props => {
  console.log(props.keys);
  return <li>{props.todo}</li>;
};

export default Todo;
