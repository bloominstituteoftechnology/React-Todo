import React from 'react';

function Todo(props) {
    return (
        <div onClick={() => props.markTodoComplete(props.idx)}>
            <p>{props.item.task}</p>
        </div>
    );
}

export default Todo;