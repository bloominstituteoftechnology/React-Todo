import React from 'react';

function Todo(props) {
    return (
        <p id={props.id}>{props.task}</p>
    );
}
export default Todo;