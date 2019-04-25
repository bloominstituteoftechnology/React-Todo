import React from 'react';
import './Todo.scss';

function Todo(props) {
    let classNames = "item"
    if (props.item.completed){
        classNames += "completed";
    }
    function updateTaskList() {
        props.toggleComplete(props.item.id);
    }
    return (
        <div className={classNames} onClick={updateTaskList}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo;