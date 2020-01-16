import React from 'react';

const Item = props => {
    return (
        <div 
            onClick={e => props.toggleCompleted(props.item.id)}
            className={`item${props.item.completed ? " completed" : ""}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
};

export default Item;