import React from "react";
import Todo from "./Todo";

const TodoList = ({ data }) =>
  data.map(item => {
    <Todo />;
  });

export default TodoList;
