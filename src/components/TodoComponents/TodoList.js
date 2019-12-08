// Maps over the tasks array and creates a new item for each element
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  console.log(props.tasks);
  return (
    <div className="shopping-list">
      {props.tasks.map(item => {
        console.log(item);
        {
          /* change back to key={item.id} once dynamic rendering is figured out */
        }
        return <Todo item={item} key={item.taskName} />;
      })}
    </div>
  );
};

export default TodoList;
