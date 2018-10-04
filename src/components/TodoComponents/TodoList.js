import React from "react";
import Todo from "./Todo";

const List = props => {
  return (
    <div>
      {props.todoData.map((item, index) => {
        return <Todo task={item} key={item.task} taskIndex={index} toggleTodo={props.toggleTodo} />;
      })}
    </div>
  );
};

export default List;
