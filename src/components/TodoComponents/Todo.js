import React from 'react';
// TODO - Import styling css file.

/* Build Instructions

<Todo /> is a component that takes in the todo data and displays the task to the screen.
*/

function Todo(props) {
    return (
        <div>{props.item.task}</div>
    )
}

export default Todo;