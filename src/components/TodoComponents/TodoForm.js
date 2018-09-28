import React from 'react';

//contains input field and buttons for creating a todo object

const ToDoForm = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input 
                type='text' 
                placeholder='...todo' 
                value={props.value}
                onChange={props.onChange} 
            />
            <button type='submit'>Add Todo</button>
            <button onClick={props.clear}>Clear Completed</button>
        </form> 
    )
}

export default ToDoForm;

