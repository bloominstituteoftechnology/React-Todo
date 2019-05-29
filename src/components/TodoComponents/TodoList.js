import React from "react";
import "./Todo.css";
import Todo from "./Todo";

const TodoList = ({ todoData }) => (
  <div className="todo-list">
    {todoData.map(item => (
      <Todo key={item.id} item={item} />
    ))}
  </div>
);

export default TodoList;
