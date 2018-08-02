import React from "react";
import Todo from "./Todo.js";

const TodoList = props => {
  return (
    <div>
      {props.taskList.map((eachTask, i) => {
        return <Todo key={i} todo={eachTask.task} />;
      })}
    </div>
  );
};

export default TodoList;
