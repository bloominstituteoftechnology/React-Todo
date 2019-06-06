import React from 'react';
import './Todo.css';

const Todo = (props) => {
    console.log('this is from TODO', props.onToggle)
    return (
        <div id="checkbox" className = {props.tasks.completed ? 'red':''} onClick = {() => props.onToggle(props.tasks.id)}>
        <input type="checkbox"></input>
            <p>
                {props.tasks.task}
            </p>
        </div>
    )
};

export default Todo;