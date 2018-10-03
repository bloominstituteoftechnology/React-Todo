import React from "react";
import Todo from "./Todo";

const List = props => {
  return (
    <div>
      {props.todoData.map(item => {
        return <Todo task={item.task} key={item.task} />;
      })}
    </div>
  );
};

export default List;
