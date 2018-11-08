import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <p 
        onClick={() => props.completedItems(props.item.id)}
        className={`item-text ${props.item.completed}`}
        >
        {props.item.task}
        </p>
    )
};

export default Todo