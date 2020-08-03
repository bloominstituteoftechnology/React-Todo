// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo';
import './Todo.css';





const TodoList = props => {
    console.log(props.tasks)

    return (

        <div className="todolist">
            {props.tasks.map(task => (
                <Task toggleTask={props.toggleTask} key={task.id} task={task} />
            ))}
            <button className="clear-btn" onClick={props.listClear}>
                Clear Tasks
            </button>
        </div>

    );

};

export default TodoList;