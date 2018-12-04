import React from "react";

export const AddButton = props => {
  return <button onClick={props.update}>Add To List</button>;
};

const ClearCompleted = () => {};

export const Input = props => {
  return <input placeholder={props.placeholder} onChange={props.input} />;
};
