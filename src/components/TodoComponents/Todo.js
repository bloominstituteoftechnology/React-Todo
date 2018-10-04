import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div>
            <h3 className={ props.completed ? 'line' : 'noLine' }
             onClick={() => props.changeCompleted(props.index)}>
             {props.task}</h3>
        </div>
    );
}

export default Todo; 