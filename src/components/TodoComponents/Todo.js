import React from "react";

const Todo = props => {
  return (
    <p onClick={() => props.toggleTodo(props.taskIndex)} className={props.task.completed ? "line-through" : null}>
      {props.task.task}
    </p>
  );
};

export default Todo;
// condition ? value if true : value if false
