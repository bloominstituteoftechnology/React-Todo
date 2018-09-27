import React from 'react';

const Todo = (props) => {
    return (
        <div onClick={props.handleClick}>
            {props.todo.task}
        </div>
    )
}  

export default Todo;