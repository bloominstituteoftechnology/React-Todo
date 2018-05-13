import React from 'react';

const ToDoList = props => {
    return(
        <div>
            <ul>
                {props.tasks.map((task) => {
                    return(
                    
                        <li key = {props.task} onClick = {props.handleRemoveTask}>{task} </li>
                    )
                })
            }              
            </ul>
        </div>         
    )
}

export default ToDoList;