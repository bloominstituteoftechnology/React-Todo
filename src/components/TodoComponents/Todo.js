import React from "react";

const Todo = props => {
    return (
        <div onClick={() => props.toggleTodo(props.todo.id)}>
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;