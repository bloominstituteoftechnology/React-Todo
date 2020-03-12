import React from 'react';

const Todo = props => {
    return (
        <div>
            <h2 className={props.completed ? 'completed' : 'notcompleted'}>{props.task.todo}</h2>
        </div>
    );
}

export default Todo;
