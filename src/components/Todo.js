import React from 'react'

const Todo = props => {
    
    return(
        <div
        className={`${props.item.completed ? 'completed' : ''}`}
        onClick={() => props.toggleTask(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo
