import React from 'react';
import './Todo.css';


const Todo = props => {
    const { task, completed } = props.todoListProp;
    return (
    <div className="todo">
            <h2>{task}</h2>
    </div>
    );
};

export default Todo;
