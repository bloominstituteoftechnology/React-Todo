import React from 'react';
import './Todo.css';


const Todo = props => {
    const { todo, completed } = props.todoListProp;
    return (
    <div className="todo">
            <h2>{todo}</h2>
    </div>
    );
};

export default Todo;
