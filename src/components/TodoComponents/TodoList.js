import React from "react";
import ToDo from "./ToDo";

import "./Todo.css"

                                //Passed from Apps.js
                                //todos = { this.state.todos } (state from app.js)
                                //handleToggle = {this.listToggle} (method to change the className of the li components when clicked)


const ToDoList = props => {


  return (
    <div className="listItems">
      <h1>To Do:</h1>
      <ul>
        {props.todos.map(data => (
          <li>
            <ToDo 
            key={data.id} 
            todo={data}
            handleToggle = {props.handleToggle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;