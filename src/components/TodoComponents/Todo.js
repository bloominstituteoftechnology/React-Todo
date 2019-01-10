import React from 'react';

function Todo(props) {
    return (
        <div onClick={props.toggleComplete}>
            {props.todo.task}
        </div>
    )
}
export default Todo;