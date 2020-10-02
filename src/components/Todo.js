import React, { useRef } from 'react';

const Todo = props => {
   
    
    

    const handleClick = e => {
        e.target.classList.toggle('done');
        props.toggleCompleted(props.id);
    }
    

    return (
        <li>
            <span  className='deleteItemBtn' onClick={() => props.removeTask(props.id)}
            >

            </span>
    <span className='task' onClick={handleClick} 
    className={`Todo${props.task.completed ? " removeTask" : ""}`}
    >{props.task}</span>
        </li>
    );
}

export default Todo;