import React from 'react'

const Todo = (props) => {
    

    const complete = (evt) => {
        props.completeItem(props.list.id)
        
    }

    return (
        <div onClick={complete}>
            {props.list.task}
        </div>
    )
}

export default Todo
