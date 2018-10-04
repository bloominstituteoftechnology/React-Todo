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
          itemStyle={props.itemStyle}
          unCompleteTask={props.unCompleteTask}
          />
      })}
    </div>
  );
};

export default FinTodoList;
