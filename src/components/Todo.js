import React from 'react'
import './Todo.css'

 const Todo = (props) => {
    return (
        <div
            onClick={() => props.toggleDone(props.todo.id)}
            className={ props.todo.complete ? "done" : "not-done"}
        >
            <h3>{props.todo.name}</h3>
        </div>
    )
}

export default Todo