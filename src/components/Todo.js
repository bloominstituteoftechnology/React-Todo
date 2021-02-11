import React from 'react';


const Todo = props => {
    return (
        <div className={`task${props.task.completed ? ' completed' : ''}`}
        onClick={() => props.toggleCompleted(props.task.id)}>

        {props.task.completed ? <p>{props.task.name} ✅</p> : <p>{props.task.name} ❌</p>}       
    </div>
    
    )
}


export default Todo;