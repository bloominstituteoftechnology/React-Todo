import React from 'react'

const Todo = props => {
    return (
        <div
         onClick={() => props.toggleItem(props.item.id)}
         className={`item${props.item.complete ? "complete" : ""}`}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo
