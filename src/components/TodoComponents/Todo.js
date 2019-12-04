import React from 'react';

const ToDo = props => {
    return(
        <div
            className={`toDo${props.toDo.completed ? ' completed': ''}`}
            style={props.toDo.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.handleToggleComplete(props.toDo.id)}
        >
            <p>{props.toDo.task}</p>
        </div>
    )
};

export default ToDo;