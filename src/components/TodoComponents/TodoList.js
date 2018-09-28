// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

const TodoList = (props) => {
    return (
        <ul>
            {props.todolist.map(newToDo => {
                return (
                    <ToDo 
                        key={newToDo.id} 
                        value={newToDo.task} 
                        className={newToDo.completed} 
                        onClick={() => props.handleClick(newToDo.id)}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList;