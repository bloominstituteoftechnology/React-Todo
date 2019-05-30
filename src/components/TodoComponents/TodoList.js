// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
const todoList = props => {
  return (
    <>
      <ul>
        {props.todoData.map(element => (
          <Todo
            key={element.id}
            task={element.task}
            strike={element.completed}
            click={() => props.completed(element.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default todoList;
