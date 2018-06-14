import React from 'react';
import './Todo.css';

const ToDoForm = props => {
    return (
        <div className='form'>
            <input type="text" placeholder="What to do?" onChange={props.changeHandle} value={props.inputValue}/>
            <div className="buttons">
            <button onClick={props.addNew}>Add</button>
            <button onClick={props.handleCompleted}>Clear Completed</button>
            </div>
        </div>
    );
}

export default ToDoForm;