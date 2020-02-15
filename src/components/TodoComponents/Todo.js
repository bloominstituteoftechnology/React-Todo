import React from 'react';

function Todo(props){

    return(
        <div className={`item${props.item.completed ? ' completed' : ''}`}
        onClick={e => props.toggleCompleted(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;