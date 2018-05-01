import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <li>{props.todo.task}<span><button className="newTodoBtn" value={props.todo.id} onClick={props.delete}>delete</button></span></li>
    )
}

export default Todo;