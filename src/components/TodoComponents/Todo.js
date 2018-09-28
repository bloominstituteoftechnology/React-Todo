import React from 'react';

const Todo = (props) => {
    return (
        <div onClick={props.handleClick} style={props.todo.completed ? {textDecoration: 'line-through'} : null }>
            {props.todo.task}
        </div>
    )
}  

export default Todo;