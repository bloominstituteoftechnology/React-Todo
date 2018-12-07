import React from "react";

import "./Todo.css"

                            //Passed from ToDoList.js
                            //key={data.id} 
                            //todo={data}
                            //handleToggle = {props.handleToggle}

const ToDo = props => {
  return (
      <div 
      style={ props.todo.completed ?  {textDecoration: 'line-through'} : null }
      onClick = { () => props.handleToggle(props.todo.id) } >
      {props.todo.task}
      </div>
  );
};

export default ToDo;