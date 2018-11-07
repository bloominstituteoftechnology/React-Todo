// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const todos = [
  {
    task: "eat lunch",
    id: Date.now(),
    completed: false
  },
  {
    task: "punch a baby",
    id: Date.now(),
    completed: false
  },
  {
    task: "defenestrate my enemies",
    id: Date.now(),
    completed: false
  },
  {
    task: "eat tendies",
    id: Date.now(),
    completed: false
  },
  {
    task: "redeem GBPs",
    id: Date.now(),
    completed: false
  }
];

const TodoList = props => {
  return todos.map(item => <Todo list={item} />);
};

export default TodoList;
