// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  let arr = [];
  for (let i in props.list) {
    arr.push(<Todo item={props.list[i]} />);
  }
  return arr;
};

export default TodoList;
