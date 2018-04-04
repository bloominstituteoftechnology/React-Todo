import React from "react";

const styles = { 
    textDecoration: 'line-through',
    color: 'red'
};

const Task = props => {
    return (
        <div 
            className="task"
            style={props.toDo.complete ? styles : null}
            onClick={() => props.completeToDo(props.toDo)}
        >
        {props.toDo.text}
        </div>
    )
            
};

export default Task;