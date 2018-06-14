import React from 'react';

const Todo = props => {
;    return (
        <div
            style={props.task.completed ? {textDecoration: "line-through"} : null}
            onClick={() => props.handleToggleComplete(props.task.id)}
        >
            {props.task.task}
        </div>);
};

export default Todo;