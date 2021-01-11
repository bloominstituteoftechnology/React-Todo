// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  console.log(props)
  const handleClick = ()=> {
    props.handleTaskCompleted();
  }

  return (
    <div>
       {props.todos.map(todo=>  (
        <Todo handleItemToggle={props.handleItemToggle} key={todo.id} todo={todo} />
      ))}

      <button onClick={handleClick}>
        Clear Todo
      </button>
    </div>
  );
};

export default TodoList;