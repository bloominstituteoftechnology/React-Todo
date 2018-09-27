import React from 'react'
const Todo = (props) => {
    return (
        <ul >
            <li onClick={props.line}>{props.task}</li>
        </ul>
    )
}

export default Todo