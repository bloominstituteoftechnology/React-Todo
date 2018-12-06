import React from "react";

import "./Todo.css"

                            //Passed from ToDoList.js
                            //key={data.id} 
                            //todo={data}
                            //handleToggle = {props.handleToggle}

const ToDo = props => {
  return (
      <div>
      {props.todo.task}
      </div>
  );
};

export default ToDo;