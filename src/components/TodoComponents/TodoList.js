import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="list">
      {props.todos.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          handleToggleComplete={props.handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
