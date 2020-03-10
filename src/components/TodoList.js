import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <h1>Todo List:</h1>
      {props.todos.map(item => (
        <Todo
          item={item}
          key={item.id}
          toggleCompleted={
            props.toggleCompleted
          }
        />
      ))}
    </div>
  );
};

export default TodoList;
