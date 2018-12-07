import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todoObject) => (
        <Todo 
          key={todoObject.id} 
          todo={todoObject} 
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;