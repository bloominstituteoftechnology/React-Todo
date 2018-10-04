import React from "react";

const Todo = props => {
    return (
        <h4 style={props.data.completed ? {textDecoration: 'line-through'} : null} onClick={() => props.handleToggleComplete(props.data.id)}>Task: {props.data.task}</h4>
    )
}

export default Todo;