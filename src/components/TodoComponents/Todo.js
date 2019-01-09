import React from "react";

function Todo(props) {
    return <li style={props.task.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => props.handleComplete(props.task.id)}>{props.task.task}</li>;
}

export default Todo;