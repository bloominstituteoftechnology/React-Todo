import React from 'react';

const ToDoForm = (props) =>{
    return(
        <div className = "to-do-container">
            <div className = "to-do-form">
                <input  onChange = {props.handleInput} placeholder =" ..todo"/>
                <button onClick = {props.addItem} className = "button">Add Todo</button>
                <button onClick = {props.removeTask} className = "button">Clear Completed</button>

            </div>
        </div>    
    )
}
export default ToDoForm;