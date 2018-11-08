import React from 'react';
import './Todo.css';

const Todo = props => {
    return <h1
        onClick={()=>props.markComplete(props.listItem.id)}
        className={`list-item ${props.listItem.completed ? 'completed' : 'incomplete'}`}
    >{props.listItem.listItem}</h1>
}

export default Todo;