import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={(e) => props.toggleItem(props.item.number)}
    >
      {props.item.name}
    </div>
  );
};

export default Todo;