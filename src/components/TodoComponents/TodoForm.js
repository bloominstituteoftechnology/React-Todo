import React from 'react';
import './Todo.css';
const TodoForm = props => {
    return (
    <div>
        <input 
        type="text"
        onChange= {props.changeEventHandler} 
        placeholder="Enter Item"
        value= {props.value} />
        
        <button onClick={props.addItem}>Add Item</button>
        <button type="submit">Clear Completed</button>
    </div>
    );
}

export default TodoForm;