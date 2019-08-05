import React from 'react'

const ToDo = props => {
    return (
        <div onClick = {() => props.toggleTask(props.task.id)}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default ToDo