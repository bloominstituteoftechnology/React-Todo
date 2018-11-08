// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  return (
    <div>
      {" "}
      {props.todos.map(todoInMap => (
        <ToDo
          key={todoInMap.id}
          todo={todoInMap}
          strikeThru={props.strikeThru}
        />
      ))}{" "}
    </div>
  );
};

export default ToDoList;
