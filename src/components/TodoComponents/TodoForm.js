import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.cNT}>
            <input placeholder="..to do" 
                   type="text"
                   onChange={props.onChange}
                   value={props.mainInput.text}
                   name="mainInput" />
            <button type="submit" onClick={props.onClick}>Add Todo</button>
            </form>
            <button onClick={props.clear} >Clear Completed</button>
        
        </div>
    )
}

export default TodoForm;