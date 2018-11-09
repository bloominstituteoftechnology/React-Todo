import React from 'react';
import './todo.css';

const Todo = props => {
    return (
        <p 
            onClick={() =>  {props.isComplete(props.singleTodo.id)}}
            className={`todo-item ${ props.singleTodo.completed ? 'strikethrough' : 'no-decoration' } ${ props.singleTodo.matchesSearch ? 'todo-displayed' : 'todo-hidden' }`}
        >
            &#10004; {props.singleTodo.task}
        </p>
    );
}

export default Todo;