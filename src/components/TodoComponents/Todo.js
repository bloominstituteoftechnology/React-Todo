import React from 'react';

function Todo (props) {
    return (
        <div className='task'>
        <p>{props.todoitem.task}</p>
        </div>
        );
}

export default Todo;