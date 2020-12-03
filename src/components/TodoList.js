import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleTask} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
