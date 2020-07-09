import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log('from Todo', props);
    return (

        <div className={props.completed === true ? 'completed' : ''} onClick={() => { props.toggleCompleted(props.id) }}>
            <p>{props.task}</p>
        </div>
    )
};

export default Todo;