import React from 'react';


const Todo = props => {
    return (
        <div 
        onClick={() => props.toggleItemCompleted(props.todoItem.id)} 
        className= {`${props.todoItem.completed ? 'completed' : ''}`}
        >
            <p>
                {props.todoItem.name}
            </p>
        </div>
    )
}

export default Todo;