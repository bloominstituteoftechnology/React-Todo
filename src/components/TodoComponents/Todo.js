import React from "react";

const Todo = props => {
    return (
        <div style={props.newTodo.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.todoComplete(props.newTodo.id)}>
            {props.newTodo.task}
        </div>
    );
};

export default Todo;