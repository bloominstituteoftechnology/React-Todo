import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todo.map(item => {
        return (
          <div>
            <h3>Hello from todolist</h3>
            <Todo item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
