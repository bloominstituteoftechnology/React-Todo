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
          key={item.id}
          item={item} 
          completeTask={props.completeTask}
          itemStyle={props.itemStyle}
          />
      })}
    </div>
  );
};

export default TodoList;
