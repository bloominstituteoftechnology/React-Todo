// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";


const ToDoList = props => {
  return (
    <ul>
      {props.allToDos.map((toDo, i) => {
        return (
          <li key={toDo.id} 
            // onClick={props.clicked}
            >{toDo.item}
          </li>
        );
      })}  
    </ul>
  )
}

export default ToDoList;