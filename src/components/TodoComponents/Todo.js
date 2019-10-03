import React from "react";

const Todo = props => {
    console.log(props);
  return (
    <div onClick={props.onClick} className={props.todo.completed ? "completed" : ""}>
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;

