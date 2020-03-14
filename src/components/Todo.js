import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div>
            <h2 className={`${props.task.completed ? 'completed' : 'notcompleted'}`} onClick={e => props.toggleClass(props.task.id)}>{props.task.todo}</h2>
        </div>
    );
}

export default Todo;
