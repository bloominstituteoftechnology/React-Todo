import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div div className="shopping-list">
      {props.todo.map((item) => {
        return <Todo item={item} key={item.id} toggleTask={props.toggleTask} />;
      })}
        <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Purchased
      </button>
    </div>
  );
};

export default TodoList;
