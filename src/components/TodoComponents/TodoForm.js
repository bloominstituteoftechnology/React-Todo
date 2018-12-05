import React from "react";

export const AddButton = props => {
  return <button onClick={props.update}>Add To List</button>;
};

export const ClearCompleted = props => {
  return <button onClick={props.clear}>Clear Completed Items</button>;
};

export const Input = props => {
  return <input placeholder={props.placeholder} onChange={props.input} />;
};
