import React from 'react';
import { Task } from './Styles';

const Todo = props => {
    return(
        <div
            className={`${props.task.completed ? 'completed' : ''}`}
            onClick={() => props.toggleCompleted(props.task.id)} >
                <Task>{props.task.name}</Task>
        </div>
    )
}

export default Todo