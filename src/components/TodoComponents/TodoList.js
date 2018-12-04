// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo'

const ToDoList= props=>{
    
    return(
        <ul>
            {props.list.map(item=>{
                return <ToDo id={item.id} task={item.task} completed={item.completed} />
            })}
        </ul>
    )
    
}
export default ToDoList;