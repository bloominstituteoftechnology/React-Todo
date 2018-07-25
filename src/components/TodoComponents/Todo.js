import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props)
    return (
        
        <div>
            <p onClick={props.toggleCompleted}>{props.task}</p>
        </div>
    )
}

export default Todo;