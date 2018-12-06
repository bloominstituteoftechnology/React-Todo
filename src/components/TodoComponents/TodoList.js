import React from "react";
import ToDo from "./ToDo";

                                //Passed from Apps.js
                                //todos = { this.state.todos }
const ToDoList = props => {
  return (
    <div>
      <h1>To Do:</h1>
      <ul>
        {props.todos.map(data => (
          <li>
            <ToDo key={data.id} taskItem={data.task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;