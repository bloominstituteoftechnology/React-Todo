import React from 'react';

function Todo(props) {
    return (
        <div className="todo-item">
            <p>{props.todoListItems}</p>
        </div>
    )
}

export default Todo;