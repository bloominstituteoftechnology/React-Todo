import React from 'react';

export default function Todo(props) {
    return(
        <div className={`item${props.item.isComplete ? ' finished' : ''}`}
            onClick={() => props.toggleTodo(props.item.id)}>
            <p>{props.item.name}</p>
        </div>
    );
}
