// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const ToDoList = (props) => {
  console.log(props)
    return (
      <div className="todoList">
        {props.list.map((item) => {
          return (
            <Todo
              key={item.id}
              item={item}
              handleComplete={props.handleComplete}
            />
          );
        })}
      </div>
    );
  }

  export default ToDoList;
