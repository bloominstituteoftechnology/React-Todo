import React from 'react';
import './Todo.css'


function TodoForm(props) {
    return (
        <form>
            <input className="input-box" 
            placeholder="...todo"
            value={props.inputText} 
            onChange={props.handleInput}
           />
            <button className="add-btn" 
            onClick={props.addItem}>Add Todo</button>
            <button className="clear-btn" 
            onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;

