import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <li 
            onClick={() => props.toggleTodo(props.todoItem.id)} 
            className={props.todoItem.completed ? 'strike-through' : ''} 
        >
            {props.todoItem.task}
        </li>
    );
}

export default Todo;
