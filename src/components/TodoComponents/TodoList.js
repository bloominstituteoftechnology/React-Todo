import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList(props) {
  return (
    <div className="todoList">
      <h1>TodoList Component</h1>
      {props.todoArr.map(t => (
        <Todo 
        key={t.id} 
        todo={t} 
        onClick={props.toggleCompleted} />
      ))}
    </div>
  );
}

export default TodoList;
