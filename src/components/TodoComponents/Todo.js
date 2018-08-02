import React from "react";

const Todo = props => {
  return <div onClick={() => props.toggleItemsComplete(props.list.id)}
  >
  {props.todo}
  </div>;
};

export default Todo;
