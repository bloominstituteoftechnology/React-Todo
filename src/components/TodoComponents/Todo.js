import React from 'react';

function Todo(props) {
    return (
        <div className="todo-item">
            <h4>{props.task.task}</h4>
        </div>
    );
}

export default Todo;