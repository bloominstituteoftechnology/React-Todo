// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
  return (
    <div className="TodoList">
      {props.todoList.map(item => {
          return <Todo 
          item={item} 
          completeTask={props.completeTask}
          />
      })}
    </div>
  );
};

export default TodoList;
