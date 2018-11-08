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
            <h3 className="task-name">
                {props.task.taskName}
            <span className="task-timestamp">
                {props.task.timeStamp}
            </span>
            <span>{props.task.completed}</span>
            </h3>
        </div>
    )
}

export default Todo;