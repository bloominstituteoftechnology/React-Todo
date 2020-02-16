import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoList.map(item => (
        <div
          onClick={() => props.toggleItem(item.id)}
          className={`item${props.completed ? "-completed" : ""}`}
        >
          <Todo key={item.id} id={item.id} task={item.task} />
        </div>
      ))}
      <button className="clear-button" onClick={props.clearCompleted}>
        Clear Finished
      </button>
    </div>
  );
};

export default TodoList;
