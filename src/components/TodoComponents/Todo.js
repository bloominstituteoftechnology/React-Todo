import React from 'react';
import './Todo.css';

const Todo = props => {
    return <li onClick={() => props.completed(props.todo.id)} style={props.todo.completed ? {textDecoration: 'line-through'} : null} >{props.todo.todo}</li> ;
}
export default Todo;