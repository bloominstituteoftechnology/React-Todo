import React from 'react';

const Item = props => {
    return (
        <div className={`item${props.item.completed ? ' completed' : ''}`}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Item;