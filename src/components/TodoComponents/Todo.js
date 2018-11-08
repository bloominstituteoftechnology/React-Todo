import React from 'react';

const Todo = props => {
    return (
        <p 
        onClick={() => props.completedItems(props.item.id)}
        className={`character-header ${props.item.completed}`}
        >
        {props.item.task}
        </p>
    )
};

export default Todo