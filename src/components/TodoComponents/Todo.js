import React from 'react';

const Todo = props => {
    return (
        <div style={{width: '35%'}}
        onClick={props.onClick}
        className={`item ${props.item.done ? "done" : ""}`}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo;