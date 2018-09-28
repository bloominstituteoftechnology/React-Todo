import React from 'react';


const Todo = (props) => {
    return(
        <li id={props.id} onClick={ ()=>{props.crossout(props.id)}} className={ (props.completed ? 'completed' : null)}
            >
            {props.value}
        </li>
    )
}

export default Todo;

// Write an anonymous function in onClick={}
// This is to contain the function so that it is ONLY called when a click occurs
// Call your function (props.click())
// Pass in the id to the function (props.id) as the argument


//Now define the className 
//Ternary syntax
//Writes "if props.completed is completed" -> "props.completed?"
//then give it class 'completed' -> 'completed'
//if not, do nothing -> ": null"
//props.completed ? 'completed' : null
