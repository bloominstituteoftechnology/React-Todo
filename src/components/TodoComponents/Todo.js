import React from 'react';

const Item= props=>{
    return(
        <div
        className={`item${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.toggle(props.item.id)}
        >
        <p>{props.item.name}</p>
        </div>
    )
}

export default Item