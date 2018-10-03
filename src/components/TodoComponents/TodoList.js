import React from "react";
import Todo from "./Todo";

const List = props => (
  <ul>
    {props.toDo.map(item => (
      <Todo task={item.task} />
    ))}
  </ul>
);

export default List;
