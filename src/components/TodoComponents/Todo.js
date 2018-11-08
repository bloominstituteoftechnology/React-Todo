import React from 'react';

const Todo = props => {
    return (
        <p 
        onClick={ () => {} }
        >
        {props.item.task}
        </p>
    )
};

export default Todo