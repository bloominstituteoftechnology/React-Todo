import React from "react";
import "./Todo.css";

const TodoList = ({ todoData }) => (
  <div className="todo-list">
    {todoData.map(item => (
      <Todo key={item.id} item={item} />
    ))}
  </div>
);

export default TodoList;
