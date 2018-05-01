// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map(task => {
                return <li key={task.id}>{task.task}</li>
            })}
        </ul>
    );
};

export default TodoList;