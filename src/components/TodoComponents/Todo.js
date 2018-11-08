import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div
            onClick={ () => {
                console.log(`div ${props.task.id} clicked`)
                props.completeTask(props.task.id)
                }
            }
            className={`task-container ${props.task.color} ${props.task.completed}` }
        >
            <div className="task-name">
                <h3>{props.task.taskName}</h3>
                <h6 className="task-timestamp">
                    {props.task.timeStamp}
                </h6>
            </div>
            
            {/* <span>{props.task.completed}</span> */}
            
        </div>
    )
}

export default Todo;