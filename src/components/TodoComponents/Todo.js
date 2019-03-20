import React from 'react';
import './Todo.css';


const Todo = (props) => {
    console.log(props)
    return (
        <h1>{props.todo.task}</h1>
    )
}
export default Todo;
