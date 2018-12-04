import React from "react";

const ToDo = props => {
  const { task, id, completed } = props.item;
  return <li>{task}</li>;
};

export default ToDo;
