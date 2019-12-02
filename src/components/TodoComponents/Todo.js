import React from 'react'

function Todo(props) {

    return (
        <h2 onClick={(e) => {
            e.preventDefault()
            props.handleChange(props.item.id)
            e.target.style.color = 'red'
        }} >{props.item.todo}</h2>
    )
}

export default Todo;