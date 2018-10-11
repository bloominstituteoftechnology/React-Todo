import React from 'react';

const Todo = props => {
    return(
        <div className="task-item">
            <h1 className={`not-complete ${props.completed ? "completed" : null }`} onClick={props.completedTask}>TASK: {props.todoList.task}</h1>
            <h3>ID: {props.todoList.id}</h3>
            <h4>{props.completed}</h4>
         
        </div>
    );
}

export default Todo;