import React from 'react';

function Todo(props) {
    if (props.completed == true) {
        return (
            <div onClick={() => props.markTodoComplete(props.idx)}>
                <p className="todo-complete">{props.item.task}</p>
            </div>
        );
    } else {
        return (
            <div className="todo-not-complete" onClick={() => props.markTodoComplete(props.idx)}>
                <p>{props.item.task}</p>
            </div>
        );
    }
}

export default Todo;