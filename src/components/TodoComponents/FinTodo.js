import React from "react";
import "./Todo.css";

const FinTodo = props => {
  return (
    <div className="FinTodoItem">
      <p style={props.itemStyle} onClick={() => props.unCompleteTask(props.item.id)}>{props.item.task}</p>
    </div>
  );
};


export default FinTodo;
