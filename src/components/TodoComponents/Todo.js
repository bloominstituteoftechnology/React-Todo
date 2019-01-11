import React from 'react';

function Todo(props) {
    const { toggleComplete, todo } = props;
    return (
        <div
            className={todo.completed ? 'completed' : null}
            style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            onClick={() => toggleComplete(todo.id)}
        >
            {props.todo.task}
        </div>
    )
}
export default Todo;