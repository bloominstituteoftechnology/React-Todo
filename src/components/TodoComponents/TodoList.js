// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//todos assembled into a list
import React from "react";
import ToDo from "./Todo.js";



const ToDoList=(props)=>{
    
    return(    
        <div>
            <ul>
                {props.todolist.map(
                    x=>(
                        <ToDo item={x}/>
                    )
                )}
            </ul>
        </div>
    )
}

export default ToDoList;

