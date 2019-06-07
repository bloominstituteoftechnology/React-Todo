import React from "react";

const Todo = props => {
  const clickHandler = () => {
    props.toggleTodo(props.todoItem.id);
  };

  return (
    <div
      className={`todo${props.todoItem.completed ? "completed" : ""}`}
      onClick={clickHandler}
    >
      <p>{props.todoItem.task}</p>
    </div>
  );
};

export default Todo;
