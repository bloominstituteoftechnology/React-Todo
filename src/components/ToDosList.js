import React from "react";

const ToDosList = props => {
  // This is "Reading" State
  console.log(props)
  return (
    <div>
      <h1>{props.newItem}</h1>
      {props.items.map((item, index) => (
        <div key={item + index}>{item}</div>
      ))}
    </div>
  );
};

export default ToDosList;

