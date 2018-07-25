import React from "react";
import "./Todo.css";

const Todo = props => {
  console.log("propsTodo", props)
  const { task } = props.todoDataProp;
  return (
    <div>
      <h4>Name: {task}</h4>
    </div>
  );
};

export default Todo;
