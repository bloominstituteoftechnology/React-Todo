import React from 'react';
import './Todo.css';

const Todo = props => {
    return <p 
        onClick={() =>  {
            props.isComplete(props.item.id);
        }}
        className={`todo-item ${props.item.completed ? 'strikethrough': 'no-decoration' }`}
    >
        {props.item.task}</p>;
}

export default Todo;