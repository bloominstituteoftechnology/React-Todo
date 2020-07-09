import React from "react";

const Todo = (props) => (
  <div className="item completed">
    <p>{props.item.name}</p>
  </div>
);

export default Todo;
