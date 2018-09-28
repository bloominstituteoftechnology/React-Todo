import React from 'react';
import './Todo.css';


const ToDoForm = (props) => {
    return (
        <form>
            <input className='input-box' placeholder='Input task to complete' value={props.value} onChange={props.inputHandler}/>
            <button className='btn' type='submit' onClick={props.addTaskHandler}>Add Todo</button>
            <button className='btn' onClick={props.clearHandler}>Clear Completed</button>
        </form>
    );
};

export default ToDoForm;