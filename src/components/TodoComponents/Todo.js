import React from 'react';
import './Todo.css';


const Todo = (props) => {
    return (
        <div key={props.id.toString()}>{props.task}</div>
    )
}

export default Todo;
