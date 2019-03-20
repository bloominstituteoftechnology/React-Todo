// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';
import Task from './Todo';

const todo = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },

    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];

function toDo () {
    return (
        <div className="list">
            {todo.map(tasksfromMap => (
                <Task item={tasksfromMap} key={tasksfromMap.id} />
            ))}
        </div>
    )
}

export default toDo;

