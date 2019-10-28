import React from "react";


const ToDoTask = props => {
    return (
        <div onClick={() => props.toggleTask(props.task.id)}>
            <p>{props.task.task}</p>
        </div>
    )
}

export default ToDoTask;