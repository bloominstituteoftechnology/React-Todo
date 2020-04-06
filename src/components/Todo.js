import React from "react";

const Todo = ({ todo, toggleTask }) => {
  const toggleClass = todo.completed ? "task completed" : "task";
  //   console.log(todo);
  return (
    <div className="todo-container">
      <div onClick={toggleTask} className={toggleClass}>
        <p>{todo.task}</p>
      </div>
    </div>
  );
};

export default Todo;
