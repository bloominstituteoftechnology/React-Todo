import React from "react";

const Todo = props => {
  const clickHandler = () => {
      console.log("This is happening", props.todoItem);
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
