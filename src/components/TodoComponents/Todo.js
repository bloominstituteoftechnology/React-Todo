// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
import React from 'react';
import './Todo.css'

function Todo(props) {
    return (
        <div>{props.passedData}</div>
    );
}

export default Todo;