import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleTask(props.todo.id)}
      className={`todo${props.todo.completed ? " completed" : ""}`}>
      <p className="task-todo">{props.todo.task}</p>
    </div>
  );
};

export default Todo;

