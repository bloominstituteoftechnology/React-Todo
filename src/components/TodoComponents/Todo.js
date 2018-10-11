import React from 'react';

const Todo = props => {
    return(
        <div className="task-item">
            <h1>TASK: {props.todoList.task}</h1>
            <h3>ID: {props.todoList.id}</h3>
            <h3>Completed: {props.todoList.completed.toString()}</h3>
        </div>
    );
}

export default Todo;