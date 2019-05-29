// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const todoList = props => {
  const output = props.todoData.map(element => {
    return <li key={element.id}>{element.task}</li>;
  });
  return (
    <div>
      <ul>{output}</ul>
    </div>
  );
};

export default todoList;
