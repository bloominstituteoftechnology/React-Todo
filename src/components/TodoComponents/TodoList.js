import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
  return (
    <div className="outputList">
      {props.todoData.map(item => {
        return (
          <Todo
            todo={item.todo}
            id={item.id}
            todoData={props.todoData}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
