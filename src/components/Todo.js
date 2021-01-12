import React from 'react';

const Todo = props => {
    const handleClick = () => {
       
       props.handleComplete(props.todo)
    }
    return (
     <div onClick = {handleClick}
     style = {props.todo.completed ? {textDecoration: "line-through"} : {textDecoration: ""}}  >{props.todo.text}</div> 
    )
}
export default Todo