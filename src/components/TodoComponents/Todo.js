import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div className="toDoContainer">
            {props.list.map(todo => <p>{todo}</p>)}
        </div>
    );
}

export default Todo;