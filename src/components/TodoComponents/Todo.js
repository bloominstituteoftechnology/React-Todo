import React from 'react';

const Todo = props => {
    return (
        <div className={`item${props.item.purchased ? ' purchased' : ''}`}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;
