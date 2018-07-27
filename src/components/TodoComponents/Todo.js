import React from "react";
import "./Todo.css";

const Todo = props => {
  const { task } = props.todoDataProp;
  return (
    <ul
      style={
        props.todoDataProp.completed ? { textDecoration: "line-through", textDecorationColor: "#FF220C"} : null
      }
      onClick={() => props.handleToggleComplete(props.todoDataProp.id)}
    >
      <li>
        <h4>{task}</h4>
      </li>
    </ul>
  );
};

export default Todo;
