import React from "react";

const Todo = props => {
  return (
    <div
      className="todo"
      onClick={() => props.toggleTodo(props.todo.id)}
      // className={`todo ${props.todo.completed ? " completed" : null}`}
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
    >
      <ul className="new-task">{props.todo.name}</ul>
    </div>
  );
};

export default Todo;
