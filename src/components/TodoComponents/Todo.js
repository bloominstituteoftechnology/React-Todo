import React from 'react'
//create the object that accepts what data you put in the todolist that is the key

const ToDo = (props) =>{

    return(
        <>
        <li>{props.task}</li>
        </>

    )
} 

export default ToDo