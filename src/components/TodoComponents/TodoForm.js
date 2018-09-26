import React from 'react';
import './Todo.css';


const ToDoForm = (props) => {
    return (
        <div>
            <input placeholder='Input task to complete' value={props.task} onChange={props.inputHandler}/>
            <button type='submit' onClick={props.addTaskHandler}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
};

export default ToDoForm;