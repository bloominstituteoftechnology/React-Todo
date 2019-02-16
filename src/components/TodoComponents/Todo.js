import React from 'react'
import ReactDOM from 'react-dom';

const Todo = (props) => {
    return (
        <div>
            {props.todo.task}
        </div>
    )
}

export default Todo;