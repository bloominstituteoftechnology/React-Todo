// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './ToDo.js';

const ToDoList = props => (
    <ul>
        {props.toDo.map(toDo => (
            <ToDo key={Math.random()}>{toDo}</ToDo>
        ))}
    </ul>
);

export default ToDoList;