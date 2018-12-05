import React from 'react';
import './Todo.css';

const Todo = props => {
    return <li onClick={() =>props.completed(props.todo.id)}>{props.todo.todo}</li> ;
}

export default Todo;