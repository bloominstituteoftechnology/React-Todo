import React from "react";
import Todo from "./Todo.js";

const TodoList = (props) => {
  return (
    <div>
      <div>
      {props.taskList.map((eachTask, i) => {
        return (
          <Todo 
          key={i} 
          todo={eachTask.task} 
          completed={eachTask.completed}
          onClick={props.clickItem}
          />
        );
      })}
      </div>
    </div>
  );
};

export default TodoList;
