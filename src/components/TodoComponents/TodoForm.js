import React from 'react';

//contains input field and buttons for creating a todo object

const ToDoForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input 
                type='text' 
                placeholder='...todo' 
                value={props.value}
                onChange={props.onChange} 
            />
            <button type='submit' onClick={props.onClick}>Add Todo</button>
            <button type='reset'>Clear Completed</button>
        </form> 
    )
}

export default ToDoForm;

