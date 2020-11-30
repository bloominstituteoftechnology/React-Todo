import React from "react";

export default function Todo(props) {
  const onClick = e => {
    console.log(e.target);
  };
  return (
    <div onClick={onClick}>
      <p>{props.item.todo}</p>
    </div>
  );
}
