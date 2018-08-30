import React from "react";

function Todo1(props) {
    return <li style={props.todo3.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => props.handleComplete(props.todo3.id)}>{props.todo3.task}</li>;
}

export default Todo1;