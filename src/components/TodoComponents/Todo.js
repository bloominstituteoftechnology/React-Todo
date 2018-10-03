import React from "react";

const Todo = props => {
    return <li style={props.todo3.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => props.handleComplete(props.todo3.id)}>{props.todo3.task}</li>;
}

export default Todo;