// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default ( {todoList, toggleCompleted, removeTask }) => {
    return (
        <ul>
            {todoList.map(todoItem => {
                return (
                    <Todo className={toggleCompleted} key={todoItem.id} id={todoItem.id} task={todoItem.task} toggleCompleted={toggleCompleted} removeTask={removeTask} />
            );
            })}
        </ul>
    );
}