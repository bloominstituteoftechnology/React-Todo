import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div>
            <p>{props.todo}</p>
        </div>
    );
};


export default Todo;
