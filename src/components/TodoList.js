// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const handleToggleLinethrough = event => {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "none";
  }
  else {
    event.target.style.textDecoration = "line-through";
  }
};

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((newTodo,index) => {
        return <li onClick={handleToggleLinethrough} key={newTodo + index}>{newTodo}</li>;
      })}
    </ul>
  );
};



export default TodoList;
