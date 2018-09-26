import React from 'react';
import './Todo.css';

const Todo = props => {
;    return (
        <div
            className="items"
            style={props.task.completed ? {textDecoration: "line-through"} : null}
            onClick={() => props.handleToggleComplete(props.task.id)}
        >
            {props.task.task}
        </div>);
};

export default Todo;