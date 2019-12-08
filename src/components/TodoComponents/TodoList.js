// Maps over the tasks array and creates a new item for each element
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  console.log(props.tasks);
  return (
    <div className="shopping-list">
      {props.tasks.map(item => {
        console.log(item);
        return <Todo item={item} key={item.taskName} />;
      })}
    </div>
  );
};

export default TodoList;
