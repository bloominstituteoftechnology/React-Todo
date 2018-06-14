import React from 'react';

const Todo = (props) => {
    let classCombo = 'todo-item';
    if (props.completed) {
        classCombo += ' completed';
    }
    if (props.hidden) {
        classCombo += ' hidden';
    }
    return (
        <div id={props.id} className={classCombo} onClick={props.handleClick}>
            <h3>{props.task}</h3>
        </div>
    );
}

export default Todo