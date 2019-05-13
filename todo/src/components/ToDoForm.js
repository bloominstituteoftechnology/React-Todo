import React from 'react';
import '../index.css';

const ToDoForm = props => {
    console.log(props, "form");
    return (
        <form>
            <input 
                type="text" onChange={props.handleChange} 
                placeholder="Enter todo..."
                name="todo"
                value={props.todo}
            />
            <button onClick={props.handleSubmit}>Submit</button>
        </form>
    )
}

export default ToDoForm;