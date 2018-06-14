import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className="todo">
            <span>{props.item.task}</span>
        </div>
    );
};

export default Todo;