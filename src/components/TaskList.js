import React from 'react';

const TaskList = props => {
    return(
        <ul>
            {props.tasks.map(task =>{
                return <li key="task">{task}</li>
            })}
        </ul>
    );
}












export default TaskList;