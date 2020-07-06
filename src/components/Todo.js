import React from 'react'

export default function Todo(props) {
    return (
        <div
        onClick={() => props.toggleItem(props.item.id)}
        className={`item${props.item.completed ? " completed" : ""}`}
        >
          <p>{props.item.name}</p>  
        </div>
    )
}
