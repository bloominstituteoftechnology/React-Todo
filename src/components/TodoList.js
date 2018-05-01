import React from "react";

const TodoList = props => {
  return (
    <ul>
      {props.chars.map(task => {
        return <li key={task.task}>{task.task}</li>;
      })}
    </ul>
  );
};

export default TodoList;