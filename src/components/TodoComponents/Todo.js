import React from "react";


const ToDoTask = props => {
    return (
        <div>
            <p>{props.task.name}</p>
        </div>
    )
}

export default ToDoTask;