// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

const ToDoList = props  => {
    return (
        <div className='todo-list'>
        {props.list.map(item => {
        return (
            <ToDo 
             listItem={item}
            />
        );
        })}

        </div>
    );
};

export default ToDoList;