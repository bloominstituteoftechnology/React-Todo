import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <p 
            onClick={() =>  {props.isComplete(props.singleTodo.id)}}
            className={`todo-item ${props.singleTodo.completed ? 'strikethrough' : 'no-decoration' }`}
        >
            {props.singleTodo.task}
        </p>
    );
}

export default Todo;