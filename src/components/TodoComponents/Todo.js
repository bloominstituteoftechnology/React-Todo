import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className="todo-items">
            <p>{props.todo}</p>
        </div>
    );
};


export default Todo;
