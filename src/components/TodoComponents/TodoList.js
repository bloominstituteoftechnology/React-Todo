import React from "react";
import "./Todo.css";
import Todo from "./Todo";

const TodoList = ({ todoData, handleToggleTask }) => (
  <div className="todo-list">
    {todoData.map(item => (
      <Todo key={item.id} todo={item} handleToggleTask={handleToggleTask} />
    ))}
  </div>
);

export default TodoList;
