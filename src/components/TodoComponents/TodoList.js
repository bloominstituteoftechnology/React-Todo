import React from "react";
import "./Todo.css";
import Todo from "./Todo";

const TodoList = ({ todoData, handleToggleTask }) => (
  <React.Fragment>
    <h2>Tasks</h2>
    <div className="todo-list">
      {todoData.map(item => (
        <Todo key={item.id} todo={item} handleToggleTask={handleToggleTask} />
      ))}
    </div>
  </React.Fragment>
);

export default TodoList;
