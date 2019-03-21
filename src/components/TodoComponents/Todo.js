import React from 'react'

const Todo = (props) => {
    return (
        
        <div className="li-wrapper">    
            <li
            className={`${props.todoTitle.purchased ? "purchased" : ""}`} 
            onClick={ () => props.toggleItem(props.todoTitle.id)} 
            >{props.todoTitle.title}</li>
        </div>
    )
}

export default Todo