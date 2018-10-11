import React from 'react';

const Todo = props => {
    return(
        <div className="task-item">
            <h1 className={`not-complete ${props.completed ? "completed" : "" }`} onClick={props.completedTask}>TASK: {props.todoList.task}</h1>
        </div>
    );
}

export default Todo;