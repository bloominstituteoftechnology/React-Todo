import React from 'react';

function Todo(props) {
    const { toggleComplete, todo } = props;
    return (
        <div
            className={todo.complete ? 'completed' : null}
            style={{ textDecoration: todo.complete ? 'line-through' : '' }}
            onClick={(e) => toggleComplete(todo.id)}
        >
            {props.todo.task}
        </div>
    )
}
export default Todo;