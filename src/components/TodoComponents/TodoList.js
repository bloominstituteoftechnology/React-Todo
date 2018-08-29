// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  let todos = props.list.map(todoItem => {
    return (
      <Todo
        key={todoItem.id}
        task={todoItem.task}
        completed={todoItem.completed}
      />
    );
  });
  return (
    <div className="todo-list">
      <ul>{todos}</ul>
    </div>
  );
};
export default TodoList;
