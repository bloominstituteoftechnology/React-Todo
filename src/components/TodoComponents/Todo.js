import React from "react";

const Todo = props => {
    return (
        <p className={props.completed.toString()} key={props.id}>{props.task}</p>
    );
}

export default Todo;