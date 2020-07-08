// your components will all go in this `component` directory.
import React from "react";
import Todo from "./Todo";

export default function TodoList({todos, toggleCompleted}) {

  return (
    <div>
      <h3>List</h3>
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