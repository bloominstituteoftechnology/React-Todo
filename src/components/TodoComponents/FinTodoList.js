import React from "react";
import FinTodo from "./FinTodo";
import "./Todo.css";

const FinTodoList = props => {
  return (
    <div className="FinTodoList">
      {props.finTodoList.map(item => {
          return <FinTodo 
          key={item.id}
          item={item} 
          unCompleteTask={props.unCompleteTask}
          />
      })}
    </div>
  );
};

export default FinTodoList;
