// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './ToDo.js';

const ToDoList = props => (
    <ul>
        {props.toDoList.map(toDo => (
            <ToDo
                className={toDo.completed? 'completed' : ''}
                key={toDo.id}
                whatthehelldoyoumeankeyisntapropwhydidyouhavemedeclareitthen={toDo.id}
                onClick={props.handleToggle}
            >{toDo.task}</ToDo>
        ))}
    </ul>
);

export default ToDoList;