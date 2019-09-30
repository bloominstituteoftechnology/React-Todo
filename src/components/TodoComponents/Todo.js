import React from 'react';

const Todo = props => {
    return (
        <div 
        className={`todo${props.task.completed ? 'completed' : ''}`}
        onClick={() => props.toggleItem(props.task.id)}>
            <p>{props.task}</p>
        </div>
    );
};

export default Todo;