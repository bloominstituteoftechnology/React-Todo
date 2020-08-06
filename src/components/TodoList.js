import React from "react";
import Todo from "./Todo.js";


const TodoList = (props) => {
  return (
    <div>
      {props.listData.map((item) => {
        return <Todo item={item} key={item.number} toggleItem={props.toggleItem} />;
      })}
      <button onClick={props.clearTask}>Clear</button>
    </div>
  );
};

export default TodoList;