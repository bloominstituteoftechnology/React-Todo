import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div className="toDoContainer">
            {props.list.map(todo => <p onClick={props.completeTask}>{todo.task}</p>)}
        </div>
    );
}

export default Todo;