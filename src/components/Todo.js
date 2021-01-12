import React from 'react'

const Todo = props =>{

    const handleToggle = props =>{
        props.handleItemToggle(props.item.id);
    }

    return(
        <div onClick={handleToggle} className={`${props.item.completed ? 'completed' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    )
}



export default Todo