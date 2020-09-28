import React from 'react';

import Task from './Task';

const ToDoList = (props) => {
    console.log(props.todos);
    return(
        <div className = "Todo-list">
        {props.todos.map(task => (
            <Task key = {task.id} task = {task} toggleTask = {props.toggleTask} />
        ))}
        <button onClick = {props.clearCompleted}>Clear Purchased</button>
    </div>
    );
};

export default ToDoList;