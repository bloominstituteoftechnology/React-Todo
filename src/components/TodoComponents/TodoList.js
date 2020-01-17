// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

const ToDoList = (props) => {
    return (
        <div className="list">
            {props.tasks.map(task => (
            <ToDo
                key={task.id}
                task={task}
                toggleCompleted={props.toggleCompleted}
            />
            ))}
            <button className="clear-button" onClick={props.clearCompleted}>
            Remove  Completed Tasks
            </button>
        </div>
        );
}

export default ToDoList;
