import React from 'react';
import './Todo.css';


const TodoForm = props => {
    // const ()
    return (
            <div>
                <input name="message" value={props.message} onChange={props.handleInputChange}></input>
                <button onClick={props.addTodoHandle}>Add</button>
                <button onClick={props.addTodoHandle}>Remove</button>
            </div>
    );
}


export default TodoForm;