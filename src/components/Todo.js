import React from 'react';
import './Todo.css'

const Todo = ({ task, handleCompletion }) => {

    const onClick = evt => {
        evt.preventDefault();
        handleCompletion(task);
    };

    return (
        <div className={task.completed ? 'completed' : '' } onClick={onClick}>
            {task.taskTitle}
        </div>
    );
};

export default Todo; 