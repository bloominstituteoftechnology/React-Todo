// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//should display a list of todo, an input field, a submit button, 
//and a clear all button.

import React from "react"
import Todo from "./Todo"

const TodoList = (props) => {
  return(
    <div>
        {props.tasks.map((item) => (
            <Todo
                key={item.id}
                item={item}
                toggleCompleted={props.toggleCompleted}
            />
        ))}
        <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
  )
}

export default TodoList;

//comment