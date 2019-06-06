import React from 'react';
import './Todo.css';

const Todo = (props) => {
    console.log('this is from TODO', props.onToggle)
    return (
        <div className = {props.tasks.completed ? 'red':''} onClick = {() => props.onToggle(props.tasks.id)}>
            <p>
                {props.tasks.task}
            </p>
        </div>
    )
};

export default Todo;