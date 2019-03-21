// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';
import Task from './Task';
import completedTaskFunction from './TodoForm';

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
        <div className="list" onClick={completedTaskFunction}>
            {todo.map(tasksfromMap => (
                <Task completedTaskFunction={completedTaskFunction} item={tasksfromMap} key={tasksfromMap.id} />
            ))}
        </div>
    )
}

export default toDo;

