import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div className="todoItem">
      <p onClick={() => props.completeTask(props.item.id)}>{props.item.task}</p>
    </div>
  );
};

export default Todo;
