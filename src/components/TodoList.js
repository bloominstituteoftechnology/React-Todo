// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';


const TaskList = (props) => {

    return (
        <div className='task-map'>
            {props.tasks.map(task => (
                <Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted} />
    ))}

            <button className='clear-btn' onClick={e => props.clearCompleted()}>Clear completed tasks</button>

            </div>

    )
}


export default TaskList;