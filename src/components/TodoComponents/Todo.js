import React from 'react';
import './Todo.css';


const Todo = (props) => {
    return (
        <div style={props.todo.completed ? { textDecoration: 'line-through' } : null } 
        onClick={() => props.handleClick(props.todo.id)}
        className="one-todo"
        >
            {props.todo.task}
        </div>
    )
}  

export default Todo;