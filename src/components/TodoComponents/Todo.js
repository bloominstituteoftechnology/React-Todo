import React from 'react';

function Todo(props){
    return (
        <div className='task-content' >                       
            <h2 
            onClick={() => props.taskComplete(props.todoTask.id)}
            className={`toggleTextDecor ${props.todoTask.taskDone}`}
            >
            {props.todoTask.task}
            </h2> 
        </div>
    );
}

export default Todo;