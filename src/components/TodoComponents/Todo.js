import React from 'react';
import './Todo.css';

const Todo = (props) => {

    return (
        <div>
            {props.listItem}
        </div>
    )
};

export default Todo;