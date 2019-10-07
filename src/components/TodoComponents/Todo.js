import React from 'react';

const Todo = props => {
    return (
        <div 
            onClick={(e => props.toggleItem(e, props.item.id))}
            className={`item${props.item.completed ? " cleared-todo" : "todo-class"}`}
        >
            <p>{props.item.name}</p>
        </div>
    )
}
export default Todo;