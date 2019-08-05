import React from 'react';
import "./Todo.css";

export default function Todo(props){
    console.log("This is props in Todo", props)
    return(
        <div className={`task ${props.item.completed? ' Finished' : ''}`} 
        onClick={() => props.toggleStatus(props.item.id)}
        >

            <h1>{props.item.task}</h1>

        </div>
    )
}