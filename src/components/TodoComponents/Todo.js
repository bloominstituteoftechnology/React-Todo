import React from 'react';
import './Todo.css';

const Todo = (props) => {
    console.log('this is from TODO', props)
    return (
        <div>
            <p>
                {props.tasks.task}
            </p>
        </div>
    )
};

export default Todo;