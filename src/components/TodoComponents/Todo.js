import React from 'react';
import './Todo.css';

const Todo = (props) =>{
    return(
        <div class={`todo ${props.task}`}
        onClick={() => props.itemCompleted(props.id)}>
            {props.task}
        </div>
    )
}

export default Todo;