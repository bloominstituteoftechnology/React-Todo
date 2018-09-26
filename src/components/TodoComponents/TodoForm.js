import React from 'react';
import './Todo.css';


const ToDoForm = (props) => {
    return (
        <form>
            <input placeholder='Input task to complete' value={props.value} onChange={props.inputHandler}/>
            <button type='submit' onClick={props.addTaskHandler}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default ToDoForm;