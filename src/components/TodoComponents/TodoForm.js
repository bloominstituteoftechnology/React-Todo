import React from 'react';  

const TodoForm = props => {
    return (
    <div className = "todo-form">
        <input type= "text" onChange = {props.change} />
        <button onClick = {props.click} className = "add-button">Add todo</button>
        <button onClick ={props.click2} className = "clear-completed">Clear Completed</button>
    </div>
    )
}

export default TodoForm; 