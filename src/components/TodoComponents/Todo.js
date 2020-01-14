import React from 'react';


const Todo = props => {
    return (
        <div 
        className={props.item.completed ? 'completed' : 'not-completed'}
        onClick={() => props.toggleItem(props.item.id)}
        >
        <p>{props.item.name}</p>

        </div>
    )
}

export default Todo;