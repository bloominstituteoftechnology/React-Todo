import React from 'react';

const Task = props =>{
    {console.log(props.task)}
    return(
        <div 
        onClick = {() => props.toggleTask(props.task.id)}
        className={`Task${props.task.iscomplete ? 'iscomplete' : ''}`}
        
        >
            <p>{props.task.task}</p>
        </div>

    );




};
export default Task;