import React from "react";
import "./Todo.css";

export default function Todo({toggleCompleted, todo}) {

  const handleClick = e => {
    toggleCompleted(todo.id);
  }
  console.log(todo.id)
  return (
    <div className="todo-container">
      <p
        onClick={handleClick}
        className="todo"
        className={`todo${todo.completed ? ` completed` : ''}`}
      >
        {todo.task}
      </p>
    </div>
  )
}