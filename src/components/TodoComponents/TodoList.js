import React from "react";
import Todo from "./Todo";

const List = props => (
  <ul>
    {props.toDo.map(item => (
      <Todo
        key={item.id}
        id={item.id}
        task={item.task}
        handleCompleted={props.handleCompleted}
        className={props.style}
      />
    ))}
  </ul>
);

export default List;
