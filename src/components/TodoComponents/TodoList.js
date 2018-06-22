// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

const ToDoList = props => {
    return (
        <div className='todo-list'>
        {props.list.map(item => {
            console.log('TodoList item', item);
            return (
                <ToDo 
                listItem={item}
                toggleStrike={props.toggleStrike}
                />
            );
        })}
        </div>
    );
};

export default ToDoList;