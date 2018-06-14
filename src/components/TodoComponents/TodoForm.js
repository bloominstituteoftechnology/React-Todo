import React from 'react';
import './Todo.css';

const ToDoForm = props => {
    return (
        <div>
            <input type="text" placeholder="What to do?" onChange={props.changeHandle} value={props.inputValue}/>
            <button onClick={props.addNew}>Add</button>
            <button>Clear Completed</button>
        </div>
    );
}

export default ToDoForm;