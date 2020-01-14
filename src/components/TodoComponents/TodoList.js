import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  // console.log("props on TodoList: ", props);
  return (
    <div>
      {props.toDoList.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-completed" onClick={props.clearCompleted}>
        Clear Completed Items
      </button>
    </div>
  );
};

export default TodoList;
