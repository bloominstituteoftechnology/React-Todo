import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(item => (
        <Todo
          toggleCompleted={props.toggleCompleted}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default TodoList;
