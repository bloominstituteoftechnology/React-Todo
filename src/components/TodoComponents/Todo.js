import React from 'react'

const ToDo = props => {
    return (
        <div onClick = {() => props.toggleItem(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default ToDo