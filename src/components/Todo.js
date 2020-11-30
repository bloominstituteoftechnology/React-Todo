import React from 'react'

const Todo = (props) => {

    const onClick = ()=>{
        props.handleToggle(props.task.id)
    }
    
    return (
        <div className={props.task.completed === true ? 'completed' : ''} onClick={onClick}>
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo
