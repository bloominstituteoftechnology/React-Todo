import React from "react";
import "./Todo.css";

import Todo from "./Todo";

const TodoList = props => {
  let todoArray = props.todoArray;
  return (
    <div className="todoListDiv">
      {todoArray.map(task => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          todoDataProp={task}
          // add key below to remove error message about
          // needing unique key for each child
          key={task.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
