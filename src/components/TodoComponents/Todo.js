import React from 'react';

const Todo = (props) => {
    let classCombo = 'todo-item';
    if (props.complete) {
        classCombo += ' complete';
    }
    return (
        <div id={props.id} className={classCombo}>
            <h3>{props.task}</h3>
        </div>
    );
}

export default Todo