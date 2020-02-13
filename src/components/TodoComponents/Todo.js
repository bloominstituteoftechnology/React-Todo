import React from 'react';
import './Todo.css'

const Todo = props => {
    return (
        <div 
            onClick={(e => props.toggleItem(e, props.item.id))}
            className={`todo-class${props.item.completed ? " cleared-todo" : ""}`}
        >
            <p>{props.item.name}</p>
        </div>
    )
}
export default Todo;