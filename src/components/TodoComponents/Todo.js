import React from "react";

const Todo = props => {
  const { task, completed, id } = props.todos;
  const clicked = () => {
    props.handleCompleted(id);
  }
  return (
    <div
      className={completed ? "completed" : null} 
      onClick={clicked}>
      {task}
    </div>
  );
};

export default Todo;
