import React from 'react'

const Todo = (props) => {

    const handleClick = () => {
        props.toggleCompleted(props.todo.id)
    }

    return (
        <div onClick={handleClick} className={`todo${props.todo.completed ? " completed" : ""}`}>
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo