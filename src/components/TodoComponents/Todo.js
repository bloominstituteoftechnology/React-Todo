import React from 'react';

function Todo(props){
    return (
        <div className='task-content' onClick={() => props.taskComplete(props.todoTask.id)} >                       
            <h2 
            className={`toggleTextDecor ${props.todoTask.taskDone}`}
            >
            {props.todoTask.task}
            </h2> 
        </div>
    );
}

export default Todo;