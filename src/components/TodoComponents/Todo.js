import React from "react";

const Todo = props => {
    return (
        <p className={props.completed.toString()} onClick={() => props.completedHandler(props.todo.id)}>{props.todo.task}</p>
    );
}

export default Todo;