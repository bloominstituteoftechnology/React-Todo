import React from "react";

const Todo = props => {
    return <div
        className="todos"
        className={props.todoData.completed ? "completed" : null}
        onClick={() => props.todoComplete(props.todoData.id)}
        key={props.todoData.id}
    >
    {props.todoData.task}
    </div>;
}

export default Todo;