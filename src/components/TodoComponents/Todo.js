import React from "react";


const ToDoTask = props => {
    return (
        <div>
            <p>{props.task.task}</p>
        </div>
    )
}

export default ToDoTask;