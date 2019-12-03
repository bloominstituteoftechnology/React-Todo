import React from 'react';

function Todo (props){
    console.log(props)
    return (
        <div
        style={props.todo.completed ? {color: 'green'}: null }
        onClick={()=>props.handleToggleComplete(props.todo.id )}
        
        >
           {props.todo.task} 
        </div>
    )
}
export default Todo