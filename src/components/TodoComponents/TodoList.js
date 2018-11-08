// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
  return (
    <div className="list">
      {props.todo.map(item => (
        <Todo onClick={props.markCompleted} list={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
