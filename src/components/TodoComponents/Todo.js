import React from 'react';

const Todo = props => {
    return (
        <div
            style={props.task.completed ? {textDecoration: "line-through"} : null}
            onClick={() => props.handleToggleComplete(props.task.id)}
        >
            {props.todo.task}
        </div>);
};

export default Todo;