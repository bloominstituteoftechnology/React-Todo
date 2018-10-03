import React from "react";

const List = props => (
  <ul>
    {props.toDo.map(item => (
      <li key={item.task}>{item.task}</li>
    ))}
  </ul>
);

export default List;
