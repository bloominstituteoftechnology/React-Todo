// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from "./Todo";

const ToDoList = (props)=>{

return(
    <div className="ToDoListItems">
        {props.todos.map(item =>{
            return (<Todo key={item.id} value={item.task} id={item.id} completed={props.removeHandler}/>)
        })}
    </div>
    )
}

export default ToDoList