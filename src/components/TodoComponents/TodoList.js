import React from "react";
import ToDo from "./ToDo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const ToDoList = props => {
  return (
    <div>
      <h1>To Do:</h1>
      <ul>
        {props.tasks.map(data => (
          <li>
            <ToDo key={data.id} taskItem={data.task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;