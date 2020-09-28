import React from 'react';

const Todo = (props) => {
    return (
        <div
            onClick={() => props.toggleDone(props.todoItem.id)}
            className={`item${props.todoItem.done ? " done" : " "}`} 
        >
            <p>{props.todoItem.item}</p>
        </div> 
    );
};

export default Todo;