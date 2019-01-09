import React from "react";

export const Todo = (props) =>
    <li style={props.task.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => props.handleComplete(props.task.id)}>{props.task.task}</li>


