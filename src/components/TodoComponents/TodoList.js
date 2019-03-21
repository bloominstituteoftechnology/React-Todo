// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="task-list">
            {props.task.map((listFromMap) => (
                <Todo key={listFromMap.id} todoProp={listFromMap} />
            ))}
        </div>
    )
}

export default TodoList