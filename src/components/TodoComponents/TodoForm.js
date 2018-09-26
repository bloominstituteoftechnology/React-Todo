import React from 'react';

const ToDoForm = (props) =>{
    return(
        <div>
            <input onChange = {props.handleInput} placeholder =" ..todo"/>
            <button onClick = {props.addItem}>Add Todo</button>
            <button>Clear Completed</button>

        </div>
    )
}
export default ToDoForm;