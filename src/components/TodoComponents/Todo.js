import React from 'react';

function Todo(props) {
    return (
        <div className="todo-item">
            <p>{props.todo.content}</p>
        </div>
    )
}

export default Todo;