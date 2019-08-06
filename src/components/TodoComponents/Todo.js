import React from 'react'

const ToDo = props => {


    return (
        <div onClick = {() => props.toggleItem(props.item.id)}>
            {props.item.completed ? 
                <p style = {{textDecorationLine : 'line-through' }} className = 'list-item'>{props.item.task}</p>
                : <p className = 'list-item'>{props.item.task}</p>
            }
        </div>
    )
}

export default ToDo