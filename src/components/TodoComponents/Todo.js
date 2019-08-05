import React from 'react'

const ToDo = props => {
    return (
        <div onClick = {() => props.toggleItem(props.item.id)}>
            {props.item.completed ? 
                <h3 style = {{textDecorationLine : 'line-through' }}>{props.item.task}</h3>
                : <h3>{props.item.task}</h3>
            }
        </div>
    )
}

export default ToDo