import React from "react";

const ToDo = props => {
    const handleClick =() => {
        props.handleTaskToggle(props.task.id);
    }

    return (
        <div onClick = {handleClick} className={`task${props.task.completed ? "completed" : ""}`}>
            <p>{props.task.name}</p>
        </div>
    );
};

export default ToDo;