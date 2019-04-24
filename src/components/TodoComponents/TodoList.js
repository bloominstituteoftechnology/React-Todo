import React from 'react'
import ToDo from './Todo'


const ToDoList = (props) =>{

    return(
        <>
  
        <ul>{props.list.map(item =>{
            return <ToDo task={item} date={Date.now()} finished={false} />
            
        })}</ul>
        </>

    )
} 

export default ToDoList

//this might not have a functional purpose yet.

