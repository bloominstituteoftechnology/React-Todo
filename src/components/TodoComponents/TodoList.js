// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";
import Todo from "./Todo";

const TodoList = props => {

  const { todos, markCompletedHandler } = props;

  return (
    <div>
      {todos.map(todo => <Todo  key={todo.id} todo={todo.task} clickHandler={markCompletedHandler}/>)}
    </div>
  );
};

export default TodoList;
