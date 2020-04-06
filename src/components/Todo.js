import React from 'react';


export default function Todo(props) {
    return (
        <div className={`${props.completed ? 'completed' : ''}`}
        onClick={(e) => props.toggleItem(e,props.item.id)} >
            <p>{props.task}</p>
        </div>
    )
}