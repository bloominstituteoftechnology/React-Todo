// your components will all go in this `component` directory.
import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

export default function TodoList({todos, toggleCompleted}) {

  return (
    <div>
      <span>
        {todos.length === 1 ? <p className="get-started">Get Started Below</p> : null}
      </span>
      {todos.map(todo => (
        <Todo 
          todo={todo}
          key={todo.id}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  )
}