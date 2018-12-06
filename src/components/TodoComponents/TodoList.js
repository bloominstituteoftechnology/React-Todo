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
            completed={item.completed}
            toggleItem={props.toggleItem}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
