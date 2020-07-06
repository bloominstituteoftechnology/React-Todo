// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo';
import './Todo.css';

const TodoList = props =>{
    
    return(
        <div className = "todolist">
            {props.tasks.Tasks.map(task => (
            <Task toggleItem={props.toggleTask} key={task.id}  task={task}     />
            ))}
            <button className="clear-btn" onClick={props.handleSubmit}>
                Complete task
            </button>
        </div>

    );

};

export default TodoList;