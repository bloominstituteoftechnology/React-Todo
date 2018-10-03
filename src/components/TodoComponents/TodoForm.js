import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.cNT}>
            <input placeholder="..to do" 
                   type="text"
                   onChange={props.onChange}
                   value={props.mainInput}
                   name="mainInput" />
            <button type="submit" onClick={props.onClick}>Add Todo</button>
            </form>
            <button >Clear Completed</button>
        
        </div>
    )
}

export default TodoForm;