import React from "react";

const Todo = ({ todo, toggleTask }) => {
  const toggleClass = todo.completed ? "task completed" : "task";
  console.log(todo);
  return (
    <div onClick={toggleTask} className={toggleClass}>
      <p>{todo.task}</p>
    </div>
  );
};

export default Todo;
