// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="grocery-list">
            {props.todo.map(task => (
                <Todo
                toggleTask = {props.toggleTask}
                key={task.id}
                task={task}
                />
            ))}
            <button className="clear-btn" onClick={props.clearTask}>
                Clear Todo
            </button>  
        </div>
    );
};

export default TodoList; 