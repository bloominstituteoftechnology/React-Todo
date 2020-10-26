import React from 'react'

//className={`item${props.item.finished} ? 'finished' : ""`}
const Todo = props => {
    
    const handleClick = () =>{
        props.handleToggleItem(props.item.id)
    }
    
    
    return(
        <div onClick={handleClick} className={`item${props.item.finished ? 'finished' : ""}`}>
    
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo